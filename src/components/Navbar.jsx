import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Project' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Menyimpan status intersection untuk tiap section
    const visibleSections = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Simpan ratio keterlihatan tiap section
          visibleSections[entry.target.id] = entry.isIntersecting;
        });

        // Cari section pertama dari daftar navItems yang sedang terlihat
        const currentActive = navItems.find((item) => visibleSections[item.id]);

        if (currentActive) {
          setActiveSection(currentActive.id);
        }
      },
      {
        // Margin pengenalan: memberikan area aktif di 10% - 60% layar dari atas
        rootMargin: '-10% 0px -50% 0px',
        threshold: [0.1, 0.5],
      }
    );

    // Ambil elemen berdasarkan ID
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    // Fallback khusus jika scroll berada di paling atas
    const handleScrollTop = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScrollTop);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f5]/90 backdrop-blur-md border-b-2 border-black px-4 md:px-12 py-2.5 sm:py-3.5 text-black font-serif transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-xl sm:text-2xl font-normal tracking-tight font-serif hover:opacity-70 transition-opacity"
        >
          Dear.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider font-bold">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-black' : 'text-zinc-600 hover:text-black'
                }`}
              >
                {item.label}
                
                {/* Garis Bawah Aktif */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-mono text-xs font-bold flex items-center gap-1 border-2 border-black px-2.5 py-1 bg-white cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>MENU</span>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-black mt-2.5 pt-2.5 pb-2 font-mono text-xs uppercase tracking-wider bg-[#fbf9f5]/95 backdrop-blur-md">
          <div className="flex flex-col gap-1.5 font-bold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={() => setIsOpen(false)} 
                  className={`px-3 py-2 border-b border-dashed border-zinc-300 flex justify-between items-center transition-colors active:bg-black active:text-white ${
                    isActive ? 'bg-[#f0ece1] text-black font-extrabold' : 'text-zinc-700'
                  }`}
                >
                  <span>{item.label}</span>
                 
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}