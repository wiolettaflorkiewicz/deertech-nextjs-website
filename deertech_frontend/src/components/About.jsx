import styles, { layout } from "../style";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionCenter}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heading1}`}>
          DeerTech is a creative studio specialized in{" "}
          <span className="text-gradient">branding</span>
        </h1>
      </motion.div>
      <div className="absolute z-[3] -left-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>
    <motion.div
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        Make your digital growth antifragile by enriching your team with experts
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        DeerTech is a software development house with top-notch experts on board
        that provides managed end-to-end software development services, as well
        as autonomous dedicated development teams for individual business needs.
        <br className="mb-5" />
        Our main expertise lies in business process automation in complex
        enterprises and supporting startups in scaling their products and
        development teams with the backing of our uniquely tailored consulting
        services in the field of product management, solution architecture, and
        design.
      </p>
    </motion.div>
  </section>
);

export default About;
