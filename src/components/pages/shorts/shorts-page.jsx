import React from "react";
import "./shorts-page.css";


//additional
import NavbarTop from "../../navbar/navbar-top/navbar-top";
import Sidebar from "../../navbar/sidebar/sidebar";
import YouTubeCard from "../../../additional/youTubeCards/ytCard";
import Appbar from "../../navbar/appbar/appbar";

function ShortsSection() {
  return (
    <section className="relative w-full h-full flex flex-col">
      <NavbarTop />
      <div className="flex-grow flex justify-start overflow-hidden">
        <Sidebar />
        <YouTubeCard />
      </div>
      <Appbar />
    </section>
  );
}

export default ShortsSection;
