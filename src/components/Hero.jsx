import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../assets";
import { experiences, projects, socialLinks } from "../constants";

const CAREER_START_YEAR = 2021;

const stats = [
  { value: `${new Date().getFullYear() - CAREER_START_YEAR}+`, label: "Years Experience" },
  // { value: `${projects.length}+`, label: "Projects Delivered" },
  { value: `50+`, label: "Projects Delivered" },  
  { value: `${experiences.length}`, label: "Companies" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center">
      <div
        className={`relative w-full max-w-7xl mx-auto ${styles.paddingX} pt-32 pb-28 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8`}
      >
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex flex-row gap-5 w-full"
        >
          <div className="hidden sm:flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="w-full">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00cea8]/30 bg-[#00cea8]/10 px-4 py-1.5 text-[13px] font-medium text-[#5eead4]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00cea8] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00cea8]" />
              </span>
              Available for new opportunities
            </span>

            <h1 className={`${styles.heroHeadText} text-white mt-4`}>
              Hi, I&apos;m <span className="gradient-text">Mohammed</span>
            </h1>

            <p className={`${styles.heroSubText} mt-3 text-white-100`}>
              Full Stack Developer crafting fast,
              <br className="sm:block hidden" /> scalable &amp; user-friendly web apps
            </p>

            <p className="mt-4 max-w-xl text-secondary text-[15px] sm:text-[17px] leading-relaxed">
              I build end-to-end products with React, Next.js, Node.js, NestJS and
              MongoDB — from clean interfaces to reliable APIs.
            </p>

            <div className="mt-8 flex flex-col xs:flex-row gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
                <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn-outline">
                Let&apos;s Talk
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="social-icon"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="w-[55%] h-[55%] object-contain"
                  />
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-3 py-4 text-center">
                  <p className="text-white text-[24px] sm:text-[32px] font-extrabold leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-secondary text-[11px] sm:text-[13px] leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#915EFF] via-[#c084fc] to-[#00cea8] opacity-40 blur-2xl" />
          <div className="relative rounded-full p-[4px] bg-gradient-to-tr from-[#915EFF] via-[#c084fc] to-[#00cea8]">
            <img
              src={profile}
              alt="Mohammed, Full Stack Developer"
              width={520}
              height={520}
              className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] rounded-full object-cover bg-white"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 w-full hidden sm:flex justify-center items-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
