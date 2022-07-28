import React from "react";
import "./explore-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";
import Sidebar from "../../navbar/sidebar/sidebar";
import YouTubeCard from "../../../additional/youTubeCards/ytCard";

//additional
import { FcBarChart, FcMusic, FcElectricity,FcBiohazard,FcNews,FcSportsMode,FcBiotech,FcLike } from "react-icons/fc";
import Appbar from "../../navbar/appbar/appbar";




function ExploreSection() {
  return (
    <section className="relative w-full h-full flex flex-col justify-start">
      <NavbarTop />
      <div className="flex-grow flex overflow-hidden">
        <Sidebar />
        <div className="flex-grow flex flex-col justify-start overflow-hidden">
          <div id="explore-page-keywords" className="w-full flex items-center gap-2 px-5">
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcBarChart />
              </span>
              <h1 className="font-semibold">Trending</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcMusic />
              </span>
              <h1 className="font-semibold">Music</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcElectricity />
              </span>
              <h1 className="font-semibold">Live</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcBiohazard />
              </span>
              <h1 className="font-semibold">Gaming</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcNews />
              </span>
              <h1 className="font-semibold">News</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcSportsMode />
              </span>
              <h1 className="font-semibold">Sport</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcBiotech />
              </span>
              <h1 className="font-semibold">Learning</h1>
            </div>
            <div id="explore-page-keyword" className="h-28 shadow-xl flex flex-col justify-start items-start gap-2 p-5">
              <span className="text-3xl">
                <FcLike />
              </span>
              <h1 className="font-semibold">Fashion & Beauty</h1>
            </div>
          </div>
          <YouTubeCard />
        </div>
      </div>
      <Appbar />
    </section>
  );
}

export default ExploreSection;
