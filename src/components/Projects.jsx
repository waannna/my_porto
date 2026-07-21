import { motion } from 'framer-motion';
import { ExternalLink, QrCode, ShoppingBag, Bot, Coffee } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'Nexus Brew',
      category: 'Web App & Ordering System',
      icon: <Coffee className="w-8 h-8 text-cyan-400" />,
      desc: 'Sistem pemesanan kafe interaktif berbasis web untuk memudahkan pelanggan memilih menu, kustomisasi pesanan, dan memesan langsung dari meja.',
      tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript'],
      github: 'https://github.com', // ganti dengan link repository milikmu
      demo: 'https://nexus-brew.vercel.app/',
    },
    {
      title: 'QR Code Attendance System',
      category: 'Web App & IoT',
      icon: <QrCode className="w-8 h-8 text-cyan-400" />,
      desc: 'Aplikasi Sistem Informasi Absensi Siswa Berbasis QR Code (QR-Presensi) untuk otomatisasi rekap presensi dan notifikasi terpusat.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'Sales & Inventory System',
      category: 'Database & Management',
      icon: <ShoppingBag className="w-8 h-8 text-cyan-400" />,
      desc: 'Sistem manajemen data barang utama (master item) serta pencatatan transaksi penjualan harian dengan laporan terstruktur.',
      tech: ['PHP', 'MySQL', 'SQL Queries'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'WhatsApp Automation Bot',
      category: 'Automation & Node.js',
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      desc: 'Bot otomatisasi WhatsApp terintegrasi dengan database survey untuk mengirim pesan, pengingat, dan rekap respon pengguna.',
      tech: ['Node.js', 'whatsapp-web.js', 'JavaScript'],
      github: 'https://github.com',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative max-w-6xl mx-auto">
      
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Project <span className="text-cyan-400">Pilihan</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-3">
          Beberapa karya dan sistem yang telah saya bangun dalam studi dan eksperimen teknis.
        </p>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      {/* Grid Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectList.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition group hover:-translate-y-1 duration-300 backdrop-blur-sm"
          >
            <div>
              {/* Header Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-700/80 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  {item.category}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
            </div>

            {/* Tech Tags & Links */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((t, idx) => (
                  <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/60">
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition"
                >
                  <FaGithub className="w-4 h-4" /> Code Repo
                </a>
                <a 
                  href={item.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-cyan-400 transition ml-auto"
                >
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}