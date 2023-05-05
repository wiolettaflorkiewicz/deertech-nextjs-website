import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { securityinfo } from "../constants";
import styles from "../style";

const SecurityCard = ({ title, content }) => (
  <div className="flex">
    <div>
      <AiOutlineCheck className="w-7 mr-4 text-green-600" />
    </div>
    <div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
      <p className="text-lg text-white pt-2 pb-4">{content}</p>
    </div>
  </div>
);
const SecurityStack = () => {
  return (
    <div className={`${styles.flexWrap}`}>
      <h2 className={`${styles.heading2} mb-6`}>
        Why You Should Choose Our CyberSecurity Services
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {securityinfo.map((security) => (
          <SecurityCard key={security.id} {...security} />
        ))}
      </div>
    </div>
  );
};

export default SecurityStack;
