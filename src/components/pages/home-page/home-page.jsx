import React from "react";
import "./home-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";

//additional
import { keywords } from "../../../assets/links/keyword";
import { navlinks } from "../../../assets/links/navlinks";
import YouTubeCard from "../../../additional/youTubeCards/ytCard";

function HomeSection() {
  return (
    <section className="w-full h-screen flex flex-col ">
      <NavbarTop />

      <div
        
        className="flex-grow flex overflow-hidden"
      >
        <div id="home-page-navlinks" className="hidden md:flex flex-col items-center w-20">
          {navlinks.map((link, key) => (
            <div
              id="home-page-navlink"
              key={key}
              className="w-full flex flex-col items-center justify-center py-5 gap-2"
            >
              <img src={link.url} />
              <small>{link.name}</small>
            </div>
          ))}
        </div>
        <div id="home-page-grow-div" className="flex-grow flex flex-col overflow-hidden">
          {/* keywords-start */}
          <div
            id="home-page-keywords"
            className="w-full flex items-center gap-5 px-7"
          >
            {keywords.map((keyword, key) => (
              <div
                id="home-page-keys"
                key={key}
                className="px-5 py-1 text-white rounded-2xl shadow-md"
              >
                {keyword.name}
              </div>
            ))}
          </div>
          {/* keywords-end */}
          {/* main-start */}
          <div id="home-page-main" className="flex-grow flex flex-wrap gap-5 p-5 items-start justify-center md:justify-start">
          <YouTubeCard />
          </div>
          {/* main-end */}
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
