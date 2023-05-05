import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import React from "react";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 DeerTech. All Rights Reserved.
        </p>
        <div className="flex flex-col md:mt-0 mt-6">
          <a href="/privacy-policy">Privacy policy</a>
          <div className="flex flex-row list-none mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
