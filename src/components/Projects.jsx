import { ExternalLink, QrCode, ShoppingBag, Bot, Coffee } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'NEXUS BREW',
      category: 'WEB APP & ORDERING SYSTEM',
      icon: <Coffee className="w-5 h-5 text-black" />,
      desc: 'Interactive web-based cafe ordering system designed to streamline menu browsing, item customization, and instant ordering.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com',
      // demo: 'https://nexus-brew.vercel.app/',
      demo: '#',

    },
    {
      title: 'QR CODE ATTENDANCE SYSTEM',
      category: 'WEB APP & IOT',
      icon: <QrCode className="w-5 h-5 text-black" />,
      desc: 'A QR Code-based student attendance system built to automate presence logging and centralize attendance reporting.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'SALES & INVENTORY SYSTEM',
      category: 'DATABASE & MANAGEMENT',
      icon: <ShoppingBag className="w-5 h-5 text-black" />,
      desc: 'Master item data management system with daily transaction tracking and structured inventory reporting.',
      tech: ['PHP', 'MySQL', 'SQL Queries'],
      github: 'https://github.com',
      demo: '#',
    },
    {
      title: 'WHATSAPP AUTOMATION BOT',
      category: 'AUTOMATION & NODE.JS',
      icon: <Bot className="w-5 h-5 text-black" />,
      desc: 'Automated WhatsApp bot integrated with survey databases to handle messages, send reminders, and compile responses.',
      tech: ['Node.js', 'whatsapp-web.js', 'JavaScript'],
      github: 'https://github.com',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-10 border-b-2 border-black scroll-mt-16 min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <div className="border-b-2 border-black pb-2 mb-6 flex justify-between items-end">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            FEATURED PROJECTS
          </h2>
          {/* <span className="font-mono text-xs text-zinc-600 hidden sm:inline uppercase">
            SELECTED WORKS
          </span> */}
        </div>

        {/* Project Grid with Smooth Hover Lift & Hard Shadow */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((item, index) => (
            <div
              key={index}
              className="border-2 border-black p-5 bg-white flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:-translate-x-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black pb-2.5 mb-3">
                  <span className="font-mono text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider transition-colors duration-300">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-black transition-colors duration-300">
                    REF-0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-2 font-serif group-hover:underline decoration-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-serif mb-4">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Tech Tags with Hover Effect */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-dashed border-zinc-300">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] bg-[#f0ece1] border border-black px-2 py-0.5 transition-colors duration-200 hover:bg-black hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link Buttons with Smooth Hover */}
                <div className="flex items-center justify-between font-mono text-xs font-bold pt-2.5 border-t border-black">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:underline transition-all duration-200 active:scale-95"
                  >
                    <FaGithub className="w-3.5 h-3.5" /> REPOSITORY
                  </a>

                  {item.demo !== '#' ? (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 bg-black text-white px-3 py-1 text-[11px] hover:bg-zinc-800 active:scale-95 transition-all duration-200"
                    >
                      LIVE DEMO <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-zinc-400 text-[10px] uppercase italic font-normal">
                      — INTERNAL USE
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}