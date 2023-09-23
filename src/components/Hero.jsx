import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github } from "../assets";
import { linkedin } from "../assets";
import { naukri } from "../assets";
import { instagram } from "../assets";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&#39;m <span className='text-[#915EFF]'>Mohammed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Developing innovative,<br className='sm:block hidden' />user-friendly web applications
            {/* I develop user interfaces <br className='sm:block hidden' /> and web applications */}
          </p>

 <div className='flex'>
  <div 
    onClick={() => window.open('https://github.com/Mohammedzeheer', "_blank")}
    className='mt-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={github}
      alt='source code'
      className='w-2/3 h-2/3 object-contain'
    />
  </div>

  <div 
    onClick={() => window.open('https://linkedin.com/in/mohammedzeheer/', "_blank")}
    className='ml-3 mt-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={linkedin}
      alt='source code'
      //className='w-1/2 h-1/2 object-contain'
    />
  </div>

  <div 
    onClick={() => window.open('https://www.naukri.com/mnjuser/profile?id=&altresid/', "_blank")}
    className='ml-3 mt-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={naukri}
      alt='source code'
      // className='w-1/2 h-1/2 object-contain'
    />
  </div>

  <div 
    onClick={() => window.open('https://www.instagram.com/zaheer_.zak/', "_blank")}
    className='ml-3 mt-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={instagram}
      alt='source code'
      className='w-1/2 h-1/2 object-contain'
    />
  </div>
 
</div>



        </div>

        {/* <div>
            <div
              onClick={() => window.open('https://github.com/Mohammedzeheer', "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}

      </div>

      {/* <ComputersCanvas /> */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
