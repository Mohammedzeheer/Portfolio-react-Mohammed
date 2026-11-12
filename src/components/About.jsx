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
                I&apos;m a senior full stack developer with nearly five years of experience
                taking web products from an idea to production. I work across the stack with{" "}
                <span className="text-white font-medium">
                    React, Next.js, Node.js, NestJS, MongoDB and PostgreSQL
                </span>
                , and I own the whole delivery: data modelling, API design, interfaces,
                deployment and support after launch. I&apos;ve built event and fest platforms,
                fee collection systems, and booking and payment products that real
                organisations run on every day. I work directly with clients and teams,
                turn loose requirements into a clear plan, and ship software that stays
                reliable as it grows.
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
