import styles from "../style";
import { deerTech } from "../assets";
import LetsTalkButton from "./LetsTalkButton";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={`z-10 flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            Custom Web App Developments <span className="text-white">|</span>{" "}
            Mobile App Development
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1}`}>
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>
        <h1 className={`${styles.heading1}`}>Digital Marketing.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Let’s create scalable web applications together and give your concept
          the wings it deserves.
        </p>
        <div className={`${styles.flexCenter} py-[16px]`}>
          <Link to="contact">
            <LetsTalkButton />
          </Link>
        </div>
      </motion.div>
      <div
        className={`z-0 flex-1 ${styles.flexCenter} md:my-0 my-10 md:block hidden`}
      >
        <img
          src={deerTech}
          alt="deerTech"
          className="w-[85%] h-[85%] absolute md:right-0 bottom-10"
        />
        <div className="absolute z-[0] w-[30%] h-[30%] -left-20 top-20 blue__gradient " />
        <div className="absolute z-[0] w-[30%] h-[30%] right-0 bottom-0 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
