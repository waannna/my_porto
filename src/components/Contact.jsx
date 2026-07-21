import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti bisa disambungkan ke EmailJS atau Formspree di sini
    alert('Terima kasih! Pesan kamu berhasil dikirim.');
  };

  return (
    <section id="contact" className="py-24 px-6 relative max-w-6xl mx-auto">
      
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Hubungi <span className="text-cyan-400">Saya</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-3">
          Punya tawaran project, diskusi teknis, atau mau sekadar bertegur sapa? Kirim pesan langsung di bawah ini!
        </p>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Info Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-4"
        >
          <div className="bg-slate-800/40 border border-slate-700/60 p-6 rounded-3xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Informasi Kontak</h3>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Email</p>
                  <a href="mailto:emailkamu@gmail.com" className="text-sm text-slate-200 hover:text-cyan-400 transition font-medium">
                    dermawan290804@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">Lokasi</p>
                  <p className="text-sm text-slate-200 font-medium">Bandung, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-700/60">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">Sosial Media:</p>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-xl hover:text-cyan-400 border border-slate-700/80 transition text-slate-300">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-xl hover:text-cyan-400 border border-slate-700/80 transition text-slate-300">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 rounded-xl hover:text-cyan-400 border border-slate-700/80 transition text-slate-300">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 bg-slate-800/40 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2">Pesan</label>
              <textarea 
                rows="4" 
                required
                placeholder="Tuliskan pesan kamu di sini..."
                className="w-full bg-slate-900/80 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-98"
            >
              Kirim Pesan <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}