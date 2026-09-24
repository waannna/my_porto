import { useState, useEffect } from 'react';
import { Layout, Database, Wrench } from 'lucide-react';
import { api } from '../services/api';
import { initialSkills } from '../data/skillsData';

const getCategoryIcon = (type) => {
  switch (type) {
    case 'layout':
      return <Layout className="w-4 h-4 text-black" />;
    case 'database':
      return <Database className="w-4 h-4 text-black" />;
    case 'wrench':
      return <Wrench className="w-4 h-4 text-black" />;
    default:
      return <Layout className="w-4 h-4 text-black" />;
  }
};

export default function Skills() {
  const [categories, setCategories] = useState(initialSkills);

  useEffect(() => {
    let isMounted = true;
    api.getSkills().then((data) => {
      if (isMounted && data) {
        setCategories(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <section 
      id="skills" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-8 sm:py-12 border-b-2 border-black scroll-mt-16 min-h-0 lg:min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="border-b-2 border-black pb-2 mb-6 sm:mb-8 flex justify-between items-end">
          <h2 className="text-xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            SKILLS & SPECIFICATIONS
          </h2>
        </div>

        {/* Skill Cards Grid with Smooth Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="border-2 border-black p-4 sm:p-5 bg-white flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group"
            >
              <div>
                <div className="flex items-center gap-2 border-b border-black pb-2.5 sm:pb-3 mb-3 sm:mb-4">
                  <div className="transition-transform duration-300 group-hover:scale-110 shrink-0">
                    {cat.icon || getCategoryIcon(cat.iconType)}
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider">{cat.title}</h3>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 font-mono text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <li 
                      key={sIdx} 
                      className="border-b border-dashed border-zinc-300 pb-1 sm:pb-1.5 text-zinc-800 transition-colors duration-200 group-hover:border-zinc-500"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 sm:mt-6 pt-2 border-t border-black text-right font-mono text-[10px] text-zinc-500 group-hover:text-black font-bold transition-colors duration-300">
                CAT. 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}