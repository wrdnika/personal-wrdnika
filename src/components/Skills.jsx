import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiExpress,
  SiVite,
  SiLaravel,
  SiPostman,
  SiFlutter,
  SiSupabase,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import LogoLoop from "./bits/LogoLoop";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiReact />, title: "React.js" },
  { node: <SiVuedotjs />, title: "Vue.js" },
  { node: <SiExpress />, title: "Express.js" },
  { node: <SiVite />, title: "Vite" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiPostman />, title: "Postman" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiGitlab />, title: "GitLab" },
];

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "linear" },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-12 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={SECTION_VARIANTS}
    >
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>

      <div className="mb-10 text-center">
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <p className="text-gray-600 dark:text-gray-400">
          MS Word, Excel, Spreadsheet, Trello, Canva, Figma
        </p>
      </div>

      <h3 className="text-xl font-semibold text-center mb-2">Tech Stack</h3>
      <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8">
        Programming: Html, Css, JavaScript, PHP, Dart.
        <br />
        Here are the technologies and tools I use in web and app development.
      </p>

      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#111827"
          ariaLabel="Technology partners"
        />
      </div>
    </motion.section>
  );
};

export default memo(Skills);
