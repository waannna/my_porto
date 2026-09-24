import { GraduationCap, BookOpen, GitBranch, Terminal, Server, Code, Database } from 'lucide-react';

export default function Chronology() {
  const milestones = [
    {
      period: 'JUL 2026 — SEP 2026',
      title: 'ENTERPRISE BACKEND & JAVA ARCHITECTURE',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Object-Oriented Programming (OOP) in Java, Spring Boot layered architecture (Controller–Service–Repository), Spring Data JPA, and PostgreSQL relational modeling.',
      tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Maven'],
      icon: <Server className="w-3.5 h-3.5" />,
    },
    {
      period: 'FEB 2026 — JUN 2026',
      title: 'ADVANCED REACT & PRODUCTION PATTERNS',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Deep dive into production-grade React patterns, custom hooks architecture, client-side routing, and modern UI engineering with Tailwind CSS.',
      tags: ['React.js', 'Vite', 'Tailwind CSS', 'Component Lifecycle'],
      icon: <Code className="w-3.5 h-3.5" />,
    },
    {
      period: 'SEP 2025 — JAN 2026',
      title: 'REACT FUNDAMENTAL & MODERN JAVASCRIPT',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Modern ES6+ syntax, asynchronous programming, component state mechanics, JSX architecture, and REST API consumption.',
      tags: ['React Fundamental', 'ES6+ JavaScript', 'REST Integration'],
      icon: <Code className="w-3.5 h-3.5" />,
    },
    {
      period: 'AUG 2025',
      title: 'VERSION CONTROL & WORKFLOW STANDARDS',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Git branching models, remote repository collaboration, merge conflict resolution, and structured commit hygiene on GitHub.',
      tags: ['Git', 'GitHub', 'Branching Models'],
      icon: <GitBranch className="w-3.5 h-3.5" />,
    },
    {
      period: 'JUN 2025 — AUG 2025',
      title: 'WEB CORE: SEMANTIC HTML, CSS & DOM',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Semantic HTML5 structures, responsive layout systems (Flexbox & CSS Grid), and DOM manipulation with vanilla JavaScript.',
      tags: ['HTML5', 'CSS3', 'Vanilla JS', 'Responsive Layouts'],
      icon: <BookOpen className="w-3.5 h-3.5" />,
    },
    {
      period: 'JAN 2025 — MAY 2025',
      title: 'DATA STRUCTURES & RELATIONAL DATABASES',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Abstract data types, algorithmic complexity, relational database design, schema normalization, and structured SQL querying.',
      tags: ['Data Structures', 'SQL', 'MySQL', 'Normalization'],
      icon: <Database className="w-3.5 h-3.5" />,
    },
    {
      period: 'SEP 2024 — JAN 2025',
      title: 'ALGORITHMIC LOGIC & C PROGRAMMING',
      institution: 'PUB SCHOLARSHIP INTENSIVE',
      desc: 'Core computational logic, memory addressing, pointers, control flow, and procedural programming foundations in C.',
      tags: ['C Language', 'Algorithms', 'Pointers & Memory'],
      icon: <Terminal className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-[#fbf9f5] text-black font-serif px-3.5 sm:px-4 md:px-12 py-8 sm:py-12 border-b-2 border-black scroll-mt-16 min-h-0 lg:min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* Section Heading */}
        <div className="border-b-2 border-black pb-2.5 mb-6 sm:mb-8 flex justify-between items-end flex-wrap gap-2">
          <div>
            <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider block w-fit mb-1">
              RECORD OF DISCIPLINE
            </span>
            <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight font-serif">
              THE CHRONOLOGY
            </h2>
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-600 uppercase">
            PUB SCHOLARSHIP • 2024 — 2026
          </span>
        </div>

        {/* Degree & Institutional Context Callout */}
        <div className="border-2 border-black bg-white p-3.5 sm:p-5 mb-6 sm:mb-10 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <div className="border border-black p-1.5 sm:p-2 bg-[#f0ece1] shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 sm:w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                <span className="font-serif font-black text-sm sm:text-base uppercase tracking-tight">
                  Universitas Nasional PASIM, Bandung
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-black text-white px-1.5 sm:px-2 py-0.5 uppercase">
                  ACTIVE CANDIDATE
                </span>
              </div>
              <p className="font-mono text-[11px] sm:text-xs text-zinc-700 leading-relaxed">
                Associate Degree in Informatics Management (D3) — Selected recipient of the <strong className="text-black">PUB (Pemberdayaan Umat Berkelanjutan)</strong> scholarship program for intensive fullstack software development. Expected completion: September 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Stem (Strict Editorial Newspaper Layout) */}
        <div className="relative border-l-2 border-black ml-2 sm:ml-4 pl-4 sm:pl-8 space-y-5 sm:space-y-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Solid Marker Node (Mathematically Centered) */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-4 h-4 bg-white border-2 border-black flex items-center justify-center transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                <div className="w-1.5 h-1.5 bg-black group-hover:bg-white" />
              </div>

              {/* Milestone Card */}
              <div className="border-2 border-black bg-white p-3.5 sm:p-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 border-b border-black pb-2 mb-2">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold bg-[#f0ece1] border border-black px-1.5 sm:px-2 py-0.5">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[10px] text-zinc-600 font-bold uppercase">
                    {item.icon}
                    <span>{item.institution}</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="font-serif font-black text-sm sm:text-lg uppercase tracking-tight mb-1 sm:mb-1.5 text-black">
                  {item.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-zinc-800 leading-relaxed mb-2.5 sm:mb-3">
                  {item.desc}
                </p>

                {/* Technical Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-2 border-t border-dashed border-zinc-300">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] sm:text-[10px] bg-[#fbf9f5] border border-black px-1.5 sm:px-2 py-0.5 text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archival Footnote */}
        <div className="mt-8 pt-3 border-t border-black text-center font-mono text-[11px] text-zinc-600">
          * DOCUMENTED FROM OFFICIAL ACADEMIC DOSSIER & PUB TRAINING CURRICULUM.
        </div>

      </div>
    </section>
  );
}
