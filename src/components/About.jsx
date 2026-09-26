/* eslint-disable react/no-unknown-property */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

export const ServiceCard = ({ index, title, icon, description }) => (
    <Tilt className="w-full h-full" options={{ max: 20, scale: 1, speed: 450 }}>
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div className="bg-tertiary rounded-[20px] h-full py-8 px-6 min-h-[260px] flex items-center flex-col text-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center">
                    <img src={icon} alt="" className="w-14 h-14 object-contain" />
                </div>

                <h3 className="text-white text-[20px] font-bold">{title}</h3>
                {description && (
                    <p className="text-secondary text-[14px] leading-relaxed">{description}</p>
                )}
            </div>
        </motion.div>
    </Tilt>
);

ServiceCard.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string,
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[30px]"
            >
                I&apos;m a full stack developer who loves turning ideas into fast, reliable
                web products. I work across the stack with{" "}
                <span className="text-white font-medium">
                    React, Next.js, Node.js, NestJS, MongoDB and PostgreSQL
                </span>
                , building everything from event platforms to booking and payment systems.
                I&apos;m a quick learner who enjoys collaborating closely with clients and teams
                to ship clean, scalable and user-friendly solutions. Let&apos;s bring your ideas
                to life!
            </motion.p>

            <div className="mt-14 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
