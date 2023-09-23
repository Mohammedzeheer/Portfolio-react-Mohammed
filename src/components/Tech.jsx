import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { AnimatedBackground } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // <div className='w-20 h-20' key={technology.name}>
          // <div className='w-[55px] h-[55px] sm-w-[100px] sm-h-[100px]' s key={technology.name}>
          <div className='w-[40px] h-[40px] sm:w-[55px] sm:h-[55px]' key={technology.name}>
          <AnimatedBackground icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const TechSection = SectionWrapper(Tech, "");
export default TechSection;
