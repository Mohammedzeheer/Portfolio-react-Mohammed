import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills &amp; Tools.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-5">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "tween", index * 0.04, 0.4)}
            className="group glass rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#915EFF]/60 hover:bg-[#915EFF]/10 hover:shadow-lg hover:shadow-[#915EFF]/20"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110">
              <img
                src={technology.icon}
                alt=""
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white-100 text-[12px] sm:text-[13px] font-medium text-center leading-tight">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const TechSection = SectionWrapper(Tech, "skills");
export default TechSection;
