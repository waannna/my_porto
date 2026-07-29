import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const waMessage = encodeURIComponent("Hello Ade, I saw your portfolio and would like to connect.");
  const waLink = `https://wa.me/6283827435164?text=${waMessage}`;

  const contacts = [
    { label: 'WHATSAPP', val: '+62 838-2743-5164', link: waLink, icon: <FaWhatsapp className="w-4 h-4" /> },
    { label: 'EMAIL', val: 'dermawan290804@gmail.com', link: 'mailto:dermawan290804@gmail.com', icon: <Mail className="w-4 h-4" /> },
    { label: 'GITHUB', val: 'github.com', link: 'https://github.com', icon: <FaGithub className="w-4 h-4" /> },
    { label: 'LINKEDIN', val: 'linkedin.com', link: 'https://linkedin.com', icon: <FaLinkedin className="w-4 h-4" /> },
  ];

  return (
    <section 
      id="contact" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-10 border-b-2 border-black scroll-mt-16 min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header */}
        <div className="border-b-2 border-black pb-2 mb-8 flex justify-between items-end">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            CONTACT
          </h2>
          {/* <span className="font-mono text-xs text-zinc-600 hidden sm:inline uppercase">
            DIRECTORY & CHANNELS
          </span> */}
        </div>

        {/* Box Utama Simpel */}
        <div className="border-2 border-black p-6 sm:p-8 bg-white transition-all duration-300 ease-in-out hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Location */}
          <div className="flex items-center gap-2 font-mono text-xs border-b border-black pb-4 mb-6">
            <MapPin className="w-4 h-4 text-black shrink-0" />
            <span className="font-bold text-zinc-500 uppercase">LOCATION:</span>
            <span className="font-bold">Bandung, West Java, Indonesia</span>
          </div>

          {/* Social Links List with Invert Hover Smooth & Shift */}
          <div className="space-y-3 font-mono text-xs">
            {contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 border border-black bg-[#fbf9f5] transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:pl-5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:scale-[0.99] group"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {c.icon}
                  </div>
                  <span className="font-bold">{c.label}</span>
                  <span className="text-zinc-500 group-hover:text-zinc-300 hidden sm:inline">| {c.val}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}