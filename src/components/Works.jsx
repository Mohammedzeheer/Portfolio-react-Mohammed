import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MAX_TAGS = 4;
const SLIDE_INTERVAL_MS = 3500;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  images,
  source_code_link,
  live_demo_link,
}) => {
  const slides = images?.length ? images : [image];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const id = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [slides.length]);

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
        className="relative block w-full aspect-[4/5] overflow-hidden"
        aria-label={`Open ${name} live demo`}
      >
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={i === 0 ? name : ""}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-[opacity,transform] duration-700 group-hover:scale-105 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/70 to-transparent h-16 top-auto pointer-events-none" />
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" aria-hidden="true">
            {slides.map((src, i) => (
              <span
                key={src}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
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
  images: PropTypes.arrayOf(PropTypes.string),
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
