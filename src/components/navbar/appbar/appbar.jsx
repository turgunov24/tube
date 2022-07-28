import React from "react";
import "./appbar.css"
//additional
import { navlinks } from "../../../assets/links/navlinks";
import { Link } from "react-router-dom";
import  { customAnimation } from "../../../App"
import { motion } from "framer-motion" 

function Appbar() {
  return (
    <nav className="absolute w-full h-20 left-0 bottom-0 flex md:hidden">
      {navlinks.map((link, key) => (
        <Link to={link.to} key={key} className="w-full h-full">
          <motion.div
            variants={customAnimation}
            initial="hidden"
            animate="visible"
            id="appbar-link"
            className="w-full h-full flex flex-col items-center justify-center py-3 px-1 gap-2"
          >
            <h1 className="text-2xl">{link.icon}</h1>
            <small className="text-[12px]">{link.name}</small>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
}

export default Appbar;
