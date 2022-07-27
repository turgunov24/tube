import React from "react";
import "./home-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";
import Sidebar from "../../navbar/sidebar/sidebar";
import YouTubeCard from "../../../additional/youTubeCards/ytCard";

//additional
import { keywords } from "../../../assets/links/keyword";

function HomeSection() {
  return (
    <section className="w-full h-full flex flex-col ">
      <NavbarTop />
      <div className="flex-grow flex overflow-hidden">
        <Sidebar />
        <div
          id="home-page-grow-div"
          className="flex-grow flex flex-col overflow-hidden"
        >
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
          <YouTubeCard />
          {/* main-end */}
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
