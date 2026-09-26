import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MAX_TAGS = 4;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const visibleTags = tags.slice(0, MAX_TAGS);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="group h-full flex flex-col bg-tertiary rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#915EFF]/50 hover:shadow-2xl hover:shadow-[#915EFF]/20"
    >
      <a
        href={live_demo_link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full aspect-[16/10] overflow-hidden"
        aria-label={`Open ${name} live demo`}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent opacity-80" />
      </a>

      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <h3 className="text-white font-bold text-[21px] sm:text-[23px] leading-tight">{name}</h3>
        <p className="mt-3 text-secondary text-[14px] leading-relaxed line-clamp-4">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[12px]"
            >
              <span className={tag.color}>#{tag.name.trim()}</span>
            </span>
          ))}
          {hiddenCount > 0 && (
            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[12px] text-secondary">
              +{hiddenCount} more
            </span>
          )}
        </div>

        <div className="mt-auto pt-6 flex gap-3">
          <a
            href={live_demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 !py-2.5 text-[14px]"
          >
            Live Demo <span aria-hidden="true">↗</span>
          </a>
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-4 !py-2.5 text-[14px]"
            aria-label={`${name} source code on GitHub`}
          >
            <img src={github} alt="" className="w-5 h-5 object-contain" />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  live_demo_link: PropTypes.string.isRequired,
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]"
      >
        Here are some projects that demonstrate my skills and experience. Each project
        includes a brief description, along with links to the live demo and source code.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const WorksSection = SectionWrapper(Works, "projects");

export default WorksSection;
