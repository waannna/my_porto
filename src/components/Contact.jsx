import { useState } from 'react';
import { Mail, MapPin, X, Send, Copy, Check } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { api } from '../services/api';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const waMessage = encodeURIComponent("Hello Ade, I saw your portfolio and would like to connect.");
  const waLink = `https://wa.me/6283827435164?text=${waMessage}`;

  const contacts = [
    { label: 'WHATSAPP', val: '+62 838-2743-5164', copyVal: '+6283827435164', link: waLink, icon: <FaWhatsapp className="w-4 h-4" /> },
    { label: 'EMAIL', val: 'dermawan290804@gmail.com', copyVal: 'dermawan290804@gmail.com', link: 'mailto:dermawan290804@gmail.com', icon: <Mail className="w-4 h-4" />, isEmail: true },
    { label: 'GITHUB', val: 'github.com/waannna', copyVal: 'https://github.com/waannna', link: 'https://github.com/waannna', icon: <FaGithub className="w-4 h-4" /> },
    { label: 'LINKEDIN', val: 'linkedin.com/in/ade-dermawan', copyVal: 'https://www.linkedin.com/in/ade-dermawan-6a566a409/', link: 'https://www.linkedin.com/in/ade-dermawan-6a566a409/', icon: <FaLinkedin className="w-4 h-4" /> },
  ];

  const handleCopy = (e, c) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = c.copyVal || c.val;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLabel(c.label);
    toast.success(`COPIED: ${textToCopy}`);
    setTimeout(() => setCopiedLabel(null), 2000);
    api.trackClick('contact_copy', c.label);
  };

  const handleContactClick = (e, c) => {
    api.trackClick('contact_click', c.label);
    if (c.isEmail) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('All fields are required.');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.sendContactMessage(formData);
      toast.success('DISPATCH RECEIVED: Message delivered successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsModalOpen(false);
    } catch (err) {
      // If backend is not running, offer direct mailto fallback
      toast.error('Server offline. Opening default mail client...');
      setTimeout(() => {
        window.location.href = `mailto:dermawan290804@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-8 sm:py-10 border-b-2 border-black scroll-mt-16 min-h-0 lg:min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header */}
        <div className="border-b-2 border-black pb-2 mb-6 sm:mb-8 flex justify-between items-end">
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            CONTACT
          </h2>
        </div>

        {/* Box Utama Simpel */}
        <div className="border-2 border-black p-4 sm:p-8 bg-white transition-all duration-300 ease-in-out hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Location */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs border-b border-black pb-3 sm:pb-4 mb-4 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
            <span className="font-bold text-zinc-500 uppercase">LOCATION:</span>
            <span className="font-bold">Bandung, West Java, Indonesia</span>
          </div>

          {/* Social Links List with Invert Hover Smooth & Shift */}
          <div className="space-y-2.5 sm:space-y-3 font-mono text-xs">
            {contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.link}
                target={c.isEmail ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => handleContactClick(e, c)}
                className="flex items-center justify-between p-2.5 sm:p-3 border border-black bg-[#fbf9f5] transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:pl-4 sm:hover:pl-5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:scale-[0.99] group cursor-pointer"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 mr-2">
                  <div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <span className="font-bold text-[11px] sm:text-xs shrink-0">{c.label}</span>
                    <span className="text-zinc-600 group-hover:text-zinc-300 text-[10px] sm:text-xs truncate block sm:inline">
                      <span className="hidden sm:inline mr-1">|</span>{c.val}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleCopy(e, c)}
                  className="opacity-70 group-hover:opacity-100 hover:scale-110 transition-all p-1 text-zinc-600 group-hover:text-white cursor-pointer shrink-0"
                  title={`Copy ${c.label}`}
                  aria-label={`Copy ${c.label}`}
                >
                  {copiedLabel === c.label ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </a>
            ))}
          </div>

        </div>

      </div>

      {/* Retro Dispatch Modal (Zero impact on base UI layout) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="border-2 border-black bg-[#fbf9f5] p-4 sm:p-6 max-w-md w-full max-h-[92vh] overflow-y-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2.5 sm:pb-3 mb-3.5 sm:mb-4">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-black text-white px-1.5 sm:px-2 py-0.5 uppercase tracking-wider block w-fit mb-1">
                  OFFICIAL DISPATCH
                </span>
                <h3 className="font-serif font-black text-base sm:text-lg uppercase tracking-tight">
                  SEND DIRECT MESSAGE
                </h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="border border-black p-1 hover:bg-black hover:text-white transition-colors cursor-pointer bg-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block font-bold uppercase mb-1 text-[11px]">SENDER NAME</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name..."
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-[#f0ece1] transition-colors"
                />
              </div>

              <div>
                <label className="block font-bold uppercase mb-1 text-[11px]">RETURN EMAIL</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email..."
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-[#f0ece1] transition-colors"
                />
              </div>

              <div>
                <label className="block font-bold uppercase mb-1 text-[11px]">DISPATCH CONTENT</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note here..."
                  className="w-full border-2 border-black p-2 bg-white focus:outline-none focus:bg-[#f0ece1] resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-mono text-xs font-bold py-2.5 uppercase hover:bg-zinc-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-black cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'TRANSMITTING...' : (
                  <>
                    <span>TRANSMIT DISPATCH</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <a 
                  href="mailto:dermawan290804@gmail.com"
                  className="text-zinc-600 hover:text-black underline text-[10px] uppercase font-mono"
                >
                  Or open default desktop mail &rarr;
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}