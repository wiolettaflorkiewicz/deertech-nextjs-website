import { backend, frontend, cms } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

function WebTechnologies() {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[70%] h-[70%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex flex-row justify-between sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Our Expertise in Web Technologies</h2>
      </div>

      <div className="w-full flex flex-row justify-between">
        <h2 className={styles.heading2}>MEAN.MERN Stack Development</h2>
      </div>
      <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
        {backend.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>

      <div className="w-full flex flex-row justify-between">
        <h2 className={styles.heading2}>Front-end Web Development</h2>
      </div>
      <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
        {frontend.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>

      <div className="w-full flex flex-row justify-between">
        <h2 className={styles.heading2}>Open Source Development</h2>
      </div>
      <div className="flex flex-wrap justify-between w-full feedback-container relative z-[1]">
        {cms.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default WebTechnologies;
