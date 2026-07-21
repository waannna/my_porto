import { motion } from 'framer-motion';
import { GraduationCap, Database, Code, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: 'Pendidikan',
      desc: 'Mahasiswa Ilmu Komputer / Prodi Manajemen Informatika di Universitas Nasional Pasim Bandung.',
    },
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: 'Full-Stack Web',
      desc: 'Berfokus pada pembuatan antarmuka modern (React, Tailwind) & logika backend (PHP, Node.js).',
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: 'Database & Otomasi',
      desc: 'Terbiasa mengelola struktur basis data MySQL serta otomasi sistem/bot terintegrasi.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative max-w-6xl mx-auto">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Tentang <span className="text-cyan-400">Saya</span>
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-6 bg-slate-800/40 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Passioned about coding & building apps
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Mengembangkan Solusi Digital Melalui Baris Kode
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Saya adalah mahasiswa Informatika yang aktif mengeksplorasi dunia pengembangan perangkat lunak. Saya menyukai tantangan dalam membangun sistem web dari awal hingga merancang arsitektur database yang efisien.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            Selain berfokus pada web development, saya juga memiliki ketertarikan dalam pembuatan konten digital serta pengelolaan infrastruktur server gratis/lokal untuk berbagai eksperimen teknis.
          </p>
        </motion.div>

        {/* Right Side Highlight Cards */}
        <div className="md:col-span-6 space-y-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-400/40 p-6 rounded-2xl flex items-start gap-4 transition group"
            >
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}