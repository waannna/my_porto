import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Import foto profil dari folder assets
import profileImg from '../assets/profile.jpg'; // <-- Sesuaikan nama & ekstensi file foto kamu

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow (Diperbarui ukuran responsifnya agar tidak bocor di HP) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-cyan-500/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto grid md:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* TEKS PERKENALAN (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 text-center md:text-left order-2 md:order-1"
        >
          {/* Badge Status */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Open for Collaboration & Projects
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Ade Dermawan</span>
          </h1>

          {/* Efek Ketik (Typewriter) - Menggunakan min-h agar tidak terjadi lonjakan tinggi saat ganti kata */}
          <h2 className="text-lg sm:text-2xl font-semibold text-slate-300 mb-4 sm:mb-5 min-h-[48px] sm:min-h-[40px]">
            Saya seorang{' '}
            <span className="text-cyan-400 font-bold block sm:inline">
              <Typewriter
                words={[
                  'Full-Stack Developer', 
                  'Informatics Student', 
                  'Database Specialist', 
                  'Automation Developer'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">
            Berfokus pada pengembangan aplikasi web modern, perancangan basis data yang terstruktur, serta otomasi sistem berbasis JavaScript & PHP.
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mb-8">
            <a 
              href="#projects" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Lihat Project <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="/cv-ade-dermawan.pdf" 
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800/50 text-slate-300 font-medium px-6 py-3 rounded-xl transition hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 text-slate-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Koneksi:</span>
            <a href="https://github.com/waannna" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800/80 rounded-lg hover:text-cyan-400 hover:bg-slate-800 border border-slate-700/60 transition">
              <FaGithub className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-800/80 rounded-lg hover:text-cyan-400 hover:bg-slate-800 border border-slate-700/60 transition">
              <FaLinkedin className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a href="mailto:dermawan290804@gmail.com" className="p-2.5 bg-slate-800/80 rounded-lg hover:text-cyan-400 hover:bg-slate-800 border border-slate-700/60 transition">
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
        </motion.div>

        {/* FOTO PROFIL (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex justify-center order-1 md:order-2"
        >
          <div className="relative group max-w-[240px] sm:max-w-none w-full flex justify-center">
            {/* Glowing Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
            
            {/* Container Foto (Ukuran disesuaikan agar pas di HP Android) */}
            <div className="relative w-56 sm:w-72 h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-800 shadow-2xl">
              <img 
                src={profileImg} 
                alt="Ade Dermawan" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}