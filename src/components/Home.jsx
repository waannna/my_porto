export default function Home() {
  return (
    <section 
      id="home" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-6 min-h-[calc(100svh-60px)] sm:min-h-[calc(100vh-70px)] border-b-2 border-black scroll-mt-16 flex flex-col justify-between"
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-between">

        {/* Title Section */}
        <div className="text-center my-auto py-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight sm:leading-none font-serif">
            THE DIGITAL<br />
            CHRONICLE
          </h1>
          <p className="mt-4 sm:mt-6 font-mono text-xs sm:text-sm uppercase tracking-widest text-zinc-700">
            — BUILDING WEB SYSTEMS, END TO END —
          </p>
        </div>

        {/* Metadata Line */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest border-b border-black pb-2 text-zinc-900">
          <div className="flex items-center gap-4">
            <span className="font-bold">EDITION #01</span>
            <span className="border-l border-black pl-4 hidden sm:inline">BANDUNG, ID</span>
          </div>
          <div>
            <span>PORTFOLIO — 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}