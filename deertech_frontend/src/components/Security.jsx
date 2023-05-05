import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Security = () => (
  <section id="security" className={layout.sectionReverse}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        CYBER SECURITY CONSULTING & PENETRATION TESTING SERVICES
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        In the fast-moving world, technologies continuously evolve and provide
        more opportunities for software development. However, as the digital
        sphere develops, so does the threat landscape.
        <br className="mb-5" />
        Many companies adopt their technology without guidance from a
        cybersecurity services company and risk getting hacked. The main goal of
        our cybersecurity team is to protect your business from the dangers in
        cyberspace and make you feel safer with our support.
        <br className="mb-5" />
        At Smart Tek, we put our best foot forward and take a proactive stance
        against cybersecurity warnings to ensure the best reaction to cyber
        threats. As one of the leading cybersecurity services providers, we
        establish your safety through cutting-edge security services that
        strengthen your cyber defense.
        <br className="mb-5" />
        <span className="text-gradient">
          {" "}
          Security is a necessary investment, not an expense.
        </span>
      </p>
    </motion.div>

    <div className={layout.sectionCenter}>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heading1}`}>
          <span className="text-gradient">SECURITY</span>
        </h1>
      </motion.div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Security;
