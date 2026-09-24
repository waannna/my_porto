import { useState, useEffect } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import { api } from '../services/api';

export default function Hero() {
  const [currentStatus, setCurrentStatus] = useState('Open to project collaborations and freelance work.');

  useEffect(() => {
    let isMounted = true;
    api.getStatus().then((data) => {
      if (isMounted && data?.status) {
        setCurrentStatus(data.status);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section 
      id="about" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-8 sm:py-12 border-b-2 border-black scroll-mt-16 min-h-0 lg:min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Kolom Gambar: Set order-1 untuk HP, dan lg:order-2 untuk Desktop */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="border-2 border-black p-2 bg-white w-full max-w-xs sm:max-w-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group">
              <div className="overflow-hidden border border-black">
                <img
                  src={profileImg}
                  alt="Ade Dermawan"
                  className="w-full h-[220px] sm:h-[320px] lg:h-[360px] object-cover object-center grayscale contrast-125 transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-2 text-center font-mono text-[10px] sm:text-[11px] text-zinc-700 uppercase tracking-tighter">
                Fig. 1.0 — Ade Dermawan
              </div>
            </div>
          </div>

          {/* Kolom Teks: Set order-2 untuk HP, dan lg:order-1 untuk Desktop */}
          <div className="lg:col-span-7 flex flex-col justify-between font-serif text-sm sm:text-base leading-relaxed text-zinc-900 order-2 lg:order-1 mt-4 lg:mt-0">
            <div className="space-y-4">
              <p className="leading-relaxed">
                <span className="float-left text-4xl sm:text-5xl font-black leading-none mr-2 font-serif">
                  I
                </span>
                <span className="font-semibold">'m Ade Dermawan</span>, studying Informatics Management at Pasim National University, Bandung. I picked up web development through the PUB scholarship, and ended up leaning toward frontend — I like taking a design and figuring out how to make it feel right to actually use.
              </p>

              <p className="border-l-2 border-black pl-3 sm:pl-4 italic text-zinc-800 text-xs sm:text-base">
                Frontend is my favorite because you see the payoff immediately — when a layout clicks and the interactions feel smooth, that is a good feeling. Backend is important, but UI is where I actually get to play around and be creative.
              </p>

              <p className="text-[11px] sm:text-xs font-mono text-zinc-600">
                * Outside of web dev, I also mess around with digital content and local server setups.
              </p>
            </div>

            {/* Action Callout Box */}
            <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 border-2 border-black bg-[#f0ece1] font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div>
                <span className="font-bold block text-[10px] sm:text-xs uppercase">CURRENT STATUS:</span>
                <span className="text-[11px] sm:text-xs text-zinc-800">{currentStatus}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2.5 w-full sm:w-auto">
                <a 
                  href="/cv-ade-dermawan.pdf"
                  download="CV_Ade_Dermawan.pdf"
                  onClick={() => api.trackClick('hero_action', 'download_cv')}
                  className="bg-white text-black border-2 border-black hover:bg-black hover:text-white active:scale-95 px-2.5 sm:px-3.5 py-2 font-bold flex items-center justify-center gap-1.5 uppercase transition-all duration-200 ease-in-out text-[11px] sm:text-xs text-center"
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" /> <span>Download CV</span>
                </a>

                <a 
                  href="#projects"
                  onClick={() => api.trackClick('hero_action', 'view_projects')}
                  className="bg-black text-white hover:bg-zinc-800 active:scale-95 px-2.5 sm:px-4 py-2 font-bold flex items-center justify-center gap-1 uppercase transition-all duration-200 ease-in-out text-[11px] sm:text-xs text-center"
                >
                  <span>Projects</span> <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}