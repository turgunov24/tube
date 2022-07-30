import React from "react";
import "./sidebar.css";
//additional
import { navlinks } from "../../../assets/links/navlinks";
import { Link } from "react-router-dom";
import  { customAnimation } from "../../../App"
import { motion } from "framer-motion" 

function Sidebar() {
  return (
    <div id="sidebar" className="hidden md:flex flex-col items-center h-full">
      {navlinks.map((link, key) => (
        <Link to={link.to} key={key} className="w-full">
          <motion.div
            variants={customAnimation}
            initial="hidden"
            animate="visible"
            id="sidebar-link"
            className="w-full flex flex-col items-center justify-center py-5 px-1 gap-2"
          >
            <h1 className="text-2xl">{link.icon}</h1>
            <small className="text-[12px]">{link.name}</small>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
