import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import styles from "../style";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className={`${styles.flexCenter} bg-discount-gradient w-16 h-16 rounded-full fixed right-16 bottom-20 transition-all`}
        >
          <BsFillArrowUpSquareFill className="text-white rounded-full w-6 h-6" />
        </button>
      )
    );
  }
};

export default BackTopBtn;
