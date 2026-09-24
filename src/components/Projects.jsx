import { useState, useEffect } from 'react';
import { ExternalLink, Coffee, Receipt, GraduationCap, Scale, FileText, X, CheckCircle2, Layers } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { api } from '../services/api';
import { initialProjects } from '../data/projectsData';
import ThermalReceipt from './ThermalReceipt';

const getProjectIcon = (type) => {
  switch (type) {
    case 'receipt':
      return <Receipt className="w-5 h-5 text-black" />;
    case 'coffee':
      return <Coffee className="w-5 h-5 text-black" />;
    case 'graduation':
      return <GraduationCap className="w-5 h-5 text-black" />;
    case 'scale':
      return <Scale className="w-5 h-5 text-black" />;
    default:
      return <Receipt className="w-5 h-5 text-black" />;
  }
};

export default function Projects() {
  const [projectList, setProjectList] = useState(initialProjects);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  useEffect(() => {
    let isMounted = true;
    api.getProjects().then((data) => {
      if (isMounted && data) {
        setProjectList(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'ALL', count: projectList.length },
    {
      id: 'spring-boot',
      label: 'SPRING BOOT & JAVA',
      count: projectList.filter((p) =>
        p.tech.some((t) => t.toLowerCase().includes('spring') || t.toLowerCase().includes('java'))
      ).length,
    },
    {
      id: 'nodejs',
      label: 'NODE.JS & EXPRESS',
      count: projectList.filter((p) =>
        p.tech.some((t) => t.toLowerCase().includes('node'))
      ).length,
    },
  ];

  const filteredProjects = projectList.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'spring-boot') {
      return item.tech.some((t) => t.toLowerCase().includes('spring') || t.toLowerCase().includes('java'));
    }
    if (activeFilter === 'nodejs') {
      return item.tech.some((t) => t.toLowerCase().includes('node'));
    }
    if (activeFilter === 'php') {
      return item.tech.some((t) => t.toLowerCase().includes('php'));
    }
    return true;
  });

  const openCaseStudy = (item) => {
    setSelectedCaseStudy(item);
    api.trackClick('case_study_open', item.title);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <section
      id="projects"
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-8 sm:py-10 border-b-2 border-black scroll-mt-16 min-h-0 lg:min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <div className="border-b-2 border-black pb-2 mb-5 sm:mb-6 flex justify-between items-end">
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            FEATURED PROJECTS
          </h2>
          <span className="font-mono text-xs text-zinc-600 hidden sm:inline uppercase">
            ARCHIVE — 4 VERIFIED WORKS
          </span>
        </div>

        {/* Filter Tabs (Minimalist Brutalist) */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6 font-mono text-[10px] sm:text-xs font-bold">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setActiveFilter(f.id);
                api.trackClick('project_filter', f.id);
              }}
              className={`border-2 border-black px-2.5 sm:px-3 py-1 uppercase transition-all duration-150 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-black hover:bg-[#f0ece1]'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        {/* Project Grid with Smooth Hover Lift & Hard Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="border-2 border-black p-4 sm:p-5 bg-white flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:-translate-x-1.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-black pb-2 sm:pb-2.5 mb-2.5 sm:mb-3">
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-wider transition-colors duration-300">
                    {item.category}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-zinc-500 group-hover:text-black transition-colors duration-300">
                    REF-0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-1.5 sm:mb-2 font-serif group-hover:underline decoration-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-serif mb-3 sm:mb-4">
                  {item.desc}
                </p>
              </div>

              <div>
                {/* Tech Tags with Hover Effect */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4 pt-2.5 sm:pt-3 border-t border-dashed border-zinc-300">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[9px] sm:text-[10px] bg-[#f0ece1] border border-black px-1.5 sm:px-2 py-0.5 transition-colors duration-200 hover:bg-black hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link Buttons with Smooth Hover */}
                <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs font-bold pt-2.5 border-t border-black flex-wrap gap-2">
                  {item.caseStudy ? (
                    <button
                      onClick={() => openCaseStudy(item)}
                      className="flex items-center gap-1 text-black hover:underline cursor-pointer active:scale-95 transition-all uppercase text-[10px] sm:text-xs"
                    >
                      <FileText className="w-3.5 h-3.5" /> CASE STUDY
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => api.trackClick('project_repo', item.title)}
                      className="flex items-center gap-1 hover:underline transition-all duration-200 active:scale-95 text-[10px] sm:text-xs"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> REPOSITORY
                    </a>

                    {item.demo && item.demo !== '#' && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => api.trackClick('project_demo', item.title)}
                        className="flex items-center gap-1 bg-black text-white px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] hover:bg-zinc-800 active:scale-95 transition-all duration-200"
                      >
                        LIVE DEMO <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal (Editorial / Brutalist Dossier) */}
      {selectedCaseStudy && (
        <div 
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
          onClick={closeCaseStudy}
        >
          <div 
            className="border-2 border-black bg-[#fbf9f5] p-4 sm:p-7 max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black relative font-serif"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Metadata */}
            <div className="flex items-start justify-between border-b-2 border-black pb-2.5 sm:pb-3 mb-3.5 sm:mb-4">
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-black text-white px-1.5 sm:px-2 py-0.5 uppercase tracking-wider block w-fit mb-1">
                  TECHNICAL DOSSIER — {selectedCaseStudy.category}
                </span>
                <h3 className="font-serif font-black text-xl sm:text-2xl uppercase tracking-tight">
                  {selectedCaseStudy.title}
                </h3>
                {selectedCaseStudy.caseStudy?.role && (
                  <p className="font-mono text-[10px] sm:text-[11px] text-zinc-600 mt-0.5">
                    ROLE: <span className="text-black font-bold">{selectedCaseStudy.caseStudy.role}</span>
                  </p>
                )}
              </div>
              <button 
                onClick={closeCaseStudy}
                className="border-2 border-black p-1 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
              {/* Executive Overview */}
              <div>
                <h4 className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 sm:mb-2">
                  EXECUTIVE SUMMARY & PURPOSE
                </h4>
                <p className="leading-relaxed bg-white border-2 border-black p-3 sm:p-4 text-zinc-900 font-serif text-xs sm:text-sm">
                  {selectedCaseStudy.caseStudy?.overview || selectedCaseStudy.desc}
                </p>
              </div>

              {/* Architectural Highlights */}
              {selectedCaseStudy.caseStudy?.highlights && (
                <div>
                  <h4 className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 sm:mb-2">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 font-serif bg-white border-2 border-black p-3 sm:p-4 text-xs sm:text-sm">
                    {selectedCaseStudy.caseStudy.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-zinc-800 leading-relaxed border-b border-dashed border-zinc-200 pb-1.5 sm:pb-2 last:border-none last:pb-0">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Digital Thermal Receipt Preview (Only for PatunganYuk) */}
              {selectedCaseStudy.id === 'patunganyuk' && (
                <div>
                  <h4 className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 sm:mb-2">
                    DIGITAL THERMAL RECEIPT (SAMPLE SLIP)
                  </h4>
                  <ThermalReceipt />
                </div>
              )}

              {/* Technical Specifications Breakdown */}
              {selectedCaseStudy.caseStudy?.stackDetails && (
                <div>
                  <h4 className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5 sm:mb-2">
                    SYSTEM SPECIFICATIONS & STACK
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 font-mono text-[10px] sm:text-[11px]">
                    {Object.entries(selectedCaseStudy.caseStudy.stackDetails).map(([key, val]) => (
                      <div key={key} className="border border-black bg-[#f0ece1] p-2 sm:p-2.5">
                        <span className="block font-bold uppercase text-zinc-600 text-[9px]">
                          {key}
                        </span>
                        <span className="text-black font-semibold">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 font-mono text-xs">
              <a
                href={selectedCaseStudy.github}
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white px-3.5 sm:px-4 py-2.5 sm:py-2 font-bold uppercase flex items-center justify-center gap-1.5 hover:bg-zinc-800 active:scale-95 transition-all text-center"
              >
                <FaGithub className="w-3.5 h-3.5" /> Browse Repository
              </a>

              <button
                onClick={closeCaseStudy}
                className="border-2 border-black px-3.5 sm:px-4 py-2.5 sm:py-2 font-bold uppercase hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer text-center"
              >
                Dismiss Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}