export default function Footer() {
  return (
    <footer className="bg-[#fbf9f5] text-black font-mono text-xs py-8 border-b-8 border-black">
      <div className="max-w-6xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <p className="font-bold uppercase tracking-wider">ADE DERMAWAN — DIGITAL PORTFOLIO</p>
          {/* <p className="text-[10px] text-zinc-600 mt-0.5">Published for professional documentation and works archive.</p> */}
        </div>

        <div className="text-[11px] border-t sm:border-t-0 border-black pt-2 sm:pt-0">
          © {new Date().getFullYear()} ADE DERMAWAN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}