import React from "react";
import "./fixed-navbar.css";
//additional
import { navlinks } from "../../.././assets/links/navlinks";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { BsYoutube } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { MdHistory,MdOutlineWatchLater} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai"

function FixedNavbar({ fixedtoggle, setFixedToggle }) {
  return (
    <nav
      className={
        fixedtoggle
          ? "shadow-lg fixed top-0 left-0 w-48 flex flex-col h-screen z-50 duration-500 gap-2 md:w-60"
          : "fixed top-0 -left-full w-48 flex flex-col h-screen z-50 duration-500 gap-2 md:w-60"
      }
    >
      <div className="w-full flex items-center py-2 px-3 gap-3 border-b-[1px] border-gray-700 md:px-5">
        <IconButton
          sx={{ color: "white" }}
          onClick={() => setFixedToggle(false)}
        >
          <FiMenu />
        </IconButton>
        <div id="navbar-top-logo" className="flex items-center gap-1">
          <a href="#" className="text-red-500 text-2xl">
            <BsYoutube />
          </a>
          <h1 className="block font-thin text-lg">YouTube</h1>
        </div>
      </div>
      <div className="flex flex-col items-center border-b-[1px] border-b-gray-700 pb-5">
        {navlinks &&
          navlinks.slice(0, 4).map((links, key) => (
            <Link
              key={key}
              to={links.to}
              className="flex items-center w-full py-2 px-5 gap-6 hover:bg-zinc-700 duration-200 md:px-7"
            >
              <span className="text-2xl text-white">{links.icon}</span>
              <h1 className="text-sm">{links.name}</h1>
            </Link>
          ))}
      </div>
      <div className="flex flex-col items-center border-b-[1px] border-b-gray-700 pb-5">
        {navlinks &&
          navlinks.slice(4).map((links, key) => (
            <Link
              key={key}
              to={links.to}
              className="flex items-center w-full py-2 px-5 gap-6 hover:bg-zinc-700 duration-200 md:px-7"
            >
              <span className="text-2xl text-white">{links.icon}</span>
              <h1 className="text-sm">{links.name}</h1>
            </Link>
          ))}
        <Link
          to="/history"
          className="flex items-center w-full py-2 px-5 gap-6 hover:bg-zinc-700 duration-200 md:px-7"
        >
          <span className="text-2xl text-white">
            <MdHistory />
          </span>
          <h1 className="text-sm">History</h1>
        </Link>
        <Link
          to="#"
          className="flex items-center w-full py-2 px-5 gap-6 hover:bg-zinc-700 duration-200 md:px-7"
        >
          <span className="text-2xl text-white">
            <MdOutlineWatchLater />
          </span>
          <h1 className="text-sm">Watch Later</h1>
        </Link>
        <Link
          to="/liked"
          className="flex items-center w-full py-2 px-5 gap-6 hover:bg-zinc-700 duration-200 md:px-7"
        >
          <span className="text-2xl text-white">
            <AiOutlineLike />
          </span>
          <h1 className="text-sm">Liked videos</h1>
        </Link>
      </div>
    </nav>
  );
}

export default FixedNavbar;
