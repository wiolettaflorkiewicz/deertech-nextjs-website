import React from "react";
import styles, { layout } from "../style";

const Contact = () => {
  return (
    <section
      id="contact"
      className={`${layout.section} flex justify-evenly items-center flex-wrap`}
    >
      <h1 className={`${styles.heading1}`}>Keep in touch</h1>
      <div className="transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-none mx-6 py-4 px-8 flex feedback-card items-center flex-row flex-start mt-6">
        <a href="mailto:info@devmeff.tech" className={`${styles.paragraph}`}>
          test@testemai.com
        </a>
      </div>
      <div className="transform transition duration-300 ease-in-out hover:-translate-y-2 cursor-none mx-6 py-4 px-8 flex feedback-card items-center flex-row flex-start mt-6">
        <a href="tel:+31638759328" className={`${styles.paragraph}`}>
          +88 888 888 888
        </a>
      </div>
    </section>
  );
};

export default Contact;
