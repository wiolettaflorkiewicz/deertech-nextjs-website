import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { socialMedia } from "../constants";
import { motion } from "framer-motion";
import Button from "./ContactButton";
import { Link } from "react-scroll";

const navLinks = [
  {
    id: "home",
    title: "</Start>",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "web-development",
    title: "Web Development",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
  },
  {
    id: "consulting",
    title: "Consulting",
  },
  {
    id: "security",
    title: "Security",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`bg-primary sm:px-16 px-6 fixed z-40 w-full flex py-2 justify-between items-center navbar`}
    >
      <a href="home">
        <motion.img
          src={logo}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          alt="deertech"
          className="w-[100px] h-[100px]"
        />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={nav.id}
            className={`font-poppins font-normal text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={``}
        >
          <Link to="contact">
            <Button />
          </Link>
        </motion.div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[30px] h-[30px] object-contain z-40"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-primary fixed top-0 right-0 w-1/2 h-full box-border sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={nav.id}
                className={`font-poppins font-medium cursor-none text-[20px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </motion.li>
            ))}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`mt-6`}
            >
              <Link to="contact">
                <Button />
              </Link>
            </motion.div>
            <div className="flex flex-row mt-6">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] cursor-none list-none ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
