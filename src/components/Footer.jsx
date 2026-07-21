import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 text-center text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-medium text-slate-300">
          Ade<span className="text-cyan-400">.dev</span>
        </p>


        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ade Dermawan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}