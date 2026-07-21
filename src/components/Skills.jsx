import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';
import { 
  SiReact, SiTailwindcss, SiJavascript, SiPhp, 
  SiMysql, SiNodedotjs, SiGit, SiGithub, SiPostgresql,
  SiC, SiMqtt, SiPostman, SiDbeaver
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
    {
      title: 'Backend & Languages',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
      ],
    },
    {
      title: 'Tools & Protocols',
      icon: <Wrench className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'MQTT', icon: <SiMqtt className="text-[#660066]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'DBeaver', icon: <SiDbeaver className="text-[#382923]" /> },
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="text-white" /> },
        { name: 'VS Code', icon: <Code2 className="text-[#007ACC]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-6xl mx-auto">
      
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Tech <span className="text-cyan-400">Stack</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-3">
          Bahasa pemrograman, framework, database, dan tools yang saya gunakan.
        </p>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full" />
      </motion.div>

      {/* Grid Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-slate-800/40 border border-slate-700/60 p-4 sm:p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-400/40 transition"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-700/60">
              <div className="p-2 sm:p-2.5 bg-slate-900 rounded-xl border border-slate-700">
                {cat.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{cat.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {cat.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx} 
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-700/50 hover:bg-slate-800 transition group"
                >
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition duration-300 shrink-0">
                    {skill.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}