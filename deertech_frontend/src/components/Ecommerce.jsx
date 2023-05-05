import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

const Ecommerce = () => (
  <section id="e-commerce" className={layout.sectionReverse}>
    <div className={layout.sectionCenter}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`${styles.heading1}`}>
          <span className="text-gradient">eCOMMERCE</span>
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
      <h2 className={`${styles.heading2} w-8/12`}>
        Taking Ecommerce to New Heights
      </h2>
      <p className={`${styles.paragraph} text-left max-w-[470px] mt-2`}>
        DeerTech is an expert in custom eCommerce development services to build
        beautiful platforms and accelerate eCommerce projects. We unlock the
        potential of eCommerce platforms as a distinguished eCommerce web
        development business to provide you with feature-rich, exclusive, and
        reliable eCommerce websites.
        <br className="mb-5" />
        Hire Ecommerce Developer that creates customer-focused digital products,
        Ecommerce web applications using Drupal, Magento development,
        WooCommerce, Shopify, and BigCommerce.
      </p>
      <ul
        className={`mt-4 text-left pr-2 md:p-0 md:ml-0 text-gray-300 text-2xl`}
      >
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Store Set-up</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Store Design</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Theme Coding & Implementation</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>SEO Implementation</p>
        </li>
        <li className={`mb-4 flex justify-start items-center`}>
          <span className={`box-border inline-block overflow-hidden relative`}>
            <AiOutlineCheck className={`text-cyan-400 mr-2`} />
          </span>
          <p className={`${styles.paragraph}`}>Integration & Configuration</p>
        </li>
      </ul>
    </motion.div>
  </section>
);

export default Ecommerce;
