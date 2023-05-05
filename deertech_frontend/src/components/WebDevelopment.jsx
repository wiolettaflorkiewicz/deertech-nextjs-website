import styles, { layout } from "../style";
import { motion } from "framer-motion";

const About = () => (
  <section id="web-development" className={layout.sectionReverse}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>Our magic web development services</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        We build React applications that are efficient, flexible and easy to
        maintain.
        <br className="mb-5" />
        We also architect robust and scalable backend solutions to offer the
        best experience for your product, integrating and evolving existing
        systems, or building a custom solution from-scratch.
        <br className="mb-5" />
        Today, our technology stack is based on Node.js, TypeScript, React,
        GraphQL, Firebase, and more.
      </p>
    </motion.div>
    <div className={layout.sectionCenter}>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heading1}`}>
          <span className="text-gradient">WEB-DEVELOPMENT</span>
        </h1>
      </motion.div>
      {/* gradient start */}
      <div className="absolute z-5 -left-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-5  w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default About;
