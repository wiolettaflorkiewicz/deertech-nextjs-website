import React from "react";
import { ecommerceStack } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const EcommerceStack = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[70%] h-[70%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex flex-row justify-between sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          World's most reliable eCommerce development services
        </h2>
      </div>

      <div className="w-full flex flex-row justify-between">
        <h2 className={styles.heading2}>
          Expert Attention & Modern Technology
        </h2>
      </div>
      <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
        {ecommerceStack.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default EcommerceStack;
