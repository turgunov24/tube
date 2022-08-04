import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar-top.css";
import { customYoutubeData } from "../../../additional/youtubeData/youtubeData";

//assets
import { IconButton, Button } from "@mui/material";
import { BsYoutube, BsBell } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export const searchResults = [];

function NavbarTop() { 
  const searchPageNavigate = useNavigate();

  function searching(e) {
    // if (e.target.value.charAt(e.target.value.length-1).keyCode == 13) {
    //   console.log("working");
    // }
    customYoutubeData.forEach((results) => {
      if (results.title.toLowerCase().includes(e.target.value)) {
        searchResults.push(results.title);
      }
    });
  }

  return (
    <nav className="w-full shadow-xl border-b-[0.5px] border-gray-700 px-4 py-1 gap-1 flex items-center xs:gap-2 sm:gap-3">
      <div className="p-1">
        <IconButton sx={{ color: "white" }}>
          <FiMenu />
        </IconButton>
      </div>
      <div id="navbar-top-logo" className=" hidden xs:flex items-center gap-1">
        <a
          id="navbar-top-logo-before"
          href="#"
          className="text-red-500 text-2xl"
        >
          <BsYoutube />
        </a>
        <h1 className="hidden sm:block font-thin text-lg">YouTube</h1>
      </div>
      <form
        action="search"
        className="relative border-[1px] border-[#323232] mx-auto flex-grow md:flex-grow-0 w-1/2"
      >
        <input
          id="navbar-top-search-input"
          type="text"
          placeholder="search..."
          className="w-full h-full"
          onChange={searching}
        />
        <Button
          id="navbar-top-search-input-button"
          variant="text"
          onClick={() => searchPageNavigate("/search")}
        >
          <HiOutlineSearch />
        </Button>
      </form>
      <div id="navbar-top-additional" className="ml-auto px-1 flex gap-2">
        <IconButton id="IconButton">
          <BsBell />
        </IconButton>
        <IconButton id="IconButton">
          <Link to="/signin">
            <AiOutlineUser />
          </Link>
        </IconButton>
      </div>
    </nav>
  );
}

export default NavbarTop;
