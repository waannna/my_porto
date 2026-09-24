export default function Footer() {
  return (
    <footer className="bg-[#fbf9f5] text-black font-mono text-xs py-6 sm:py-8 border-b-4 sm:border-b-8 border-black">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
        <div>
          <p className="font-bold uppercase tracking-wider text-[11px] sm:text-xs">
            ADE DERMAWAN — DIGITAL PORTFOLIO
          </p>
        </div>

        <div className="text-[10px] sm:text-[11px] border-t sm:border-t-0 border-black pt-2 sm:pt-0 text-zinc-600">
          <span>© {new Date().getFullYear()} ADE DERMAWAN. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
}