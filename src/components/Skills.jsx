import { Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'FRONTEND DEVELOPMENT',
      icon: <Layout className="w-4 h-4 text-black" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    },
    {
      title: 'BACKEND & LANGUAGES',
      icon: <Database className="w-4 h-4 text-black" />,
      skills: ['PHP', 'Node.js', 'MySQL', 'PostgreSQL', 'C Language', 'Java'],
    },
    {
      title: 'TOOLS & PROTOCOLS',
      icon: <Wrench className="w-4 h-4 text-black" />,
      skills: ['Git & GitHub', 'MQTT Protocol', 'Postman', 'DBeaver', 'VS Code'],
    },
  ];

  return (
    <section 
      id="skills" 
      className="bg-[#fbf9f5] text-black font-serif px-4 md:px-12 py-12 border-b-2 border-black scroll-mt-16 min-h-[calc(100vh-70px)] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="border-b-2 border-black pb-2 mb-8 flex justify-between items-end">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-serif">
            SKILLS & SPECIFICATIONS
          </h2>
          {/* <span className="font-mono text-xs text-zinc-600 hidden sm:inline uppercase">TECHNICAL DOCUMENT</span> */}
        </div>

        {/* Skill Cards Grid with Smooth Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="border-2 border-black p-5 bg-white flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] group"
            >
              <div>
                <div className="flex items-center gap-2 border-b border-black pb-3 mb-4">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5 font-mono text-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <li 
                      key={sIdx} 
                      className="border-b border-dashed border-zinc-300 pb-1.5 text-zinc-800 transition-colors duration-200 group-hover:border-zinc-500"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2 border-t border-black text-right font-mono text-[10px] text-zinc-500 group-hover:text-black font-bold transition-colors duration-300">
                CAT. 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}