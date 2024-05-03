import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { AnimatedBackground } from "./canvas";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-[40px] h-[40px] sm:w-[55px] sm:h-[55px]' key={technology.name}>
          <AnimatedBackground icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const TechSection = SectionWrapper(Tech, "");
export default TechSection;
