import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

const Consulting = () => (
  <section id="consulting" className={layout.sectionReverse}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        Helping Startups and Enterprises win in the connected world.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        When it comes to setting up an excellent online store, we have a full
        spectrum of offerings which can be the need of a brand or a merchant who
        wants to build their online revenue stream. It ranges from consulting
        for what, to do, to building a store, to managing it, we do all of them.
        <br className="mb-5" />
        Our experts act like your eCommerce Strategist and guiding light at each
        stage of your online success. This includes,
      </p>
      <ul
        className={`mt-4 text-left pr-2 md:p-0 md:ml-0 text-gray-300 text-2xl`}
      >
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>
            Choosing the right model to maximize your revenue
          </p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Custom Journey Map (CJM)</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>
            Curating awesome user experience (UX)
          </p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>
            Technical Consulting (selecting what is right)
          </p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Setting a roadmap</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>
            On-going Audit and Consultation
          </p>
        </li>
      </ul>
    </motion.div>

    <div className={layout.sectionCenter}>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heading1}`}>
          <span className="text-gradient">CONSULTING</span>
        </h1>
      </motion.div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/6 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Consulting;
