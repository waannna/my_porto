import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Link WhatsApp dengan nomor kamu & pesan otomatis
  const waMessage = encodeURIComponent("Halo Ade, saya melihat portofolio Anda dan ingin berdiskusi.");
  const waLink = `https://wa.me/6283827435164?text=${waMessage}`;

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Project', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 z-50 py-4 px-6 md:px-12 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
          <Code2 className="w-6 h-6 text-cyan-400" />
          <span>Ade<span className="text-cyan-400">.dev</span></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button (Direct to WA) */}
        <div className="hidden md:block">
          <a 
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition shadow-md shadow-cyan-500/10 inline-block"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 bg-slate-900/95 border-b border-slate-800 flex flex-col gap-4 mt-2 rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 font-medium text-base py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-center text-sm transition mt-2"
          >
            Hubungi Saya
          </a>
        </div>
      )}
    </nav>
  );
}