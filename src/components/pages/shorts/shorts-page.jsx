import React from "react";
import "./shorts-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";
import Sidebar from "../../navbar/sidebar/sidebar";
import YouTubeCard from "../../../additional/youTubeCards/ytCard";

function ShortsSection() {
  return (
    <section className="w-full h-full flex flex-col">
      <NavbarTop />
      <div className="flex-grow flex justify-start overflow-hidden">
        <Sidebar />
        <YouTubeCard />
      </div>
    </section>
  );
}

export default ShortsSection;
