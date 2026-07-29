import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tampilkan tombol jika user scroll ke bawah lebih dari 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 bg-black text-white p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(251,249,245,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out font-mono text-xs uppercase font-bold flex items-center gap-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}