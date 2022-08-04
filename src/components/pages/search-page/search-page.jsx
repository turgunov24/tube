import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./search-page.css";
import NavbarTop, {
  searchResults,
} from "../../../components/navbar/navbar-top/navbar-top";
import { customYoutubeData } from "../../../additional/youtubeData/youtubeData";
import { selectedVideos } from "../../../additional/youTubeCards/ytCard";
import Sidebar from "../../../components/navbar/sidebar/sidebar";
import Appbar from "../../navbar/appbar/appbar";

function SearchSection() {
  const [searched, setsearched] = useState([]);
  const navigate = useNavigate();

  searchResults &&
    searchResults.forEach((res) => {
      customYoutubeData.map((video) => {
        if (video.title == res) {
          searched.push(video);
        }
      });
    });

  console.log(searched);
  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden">
      <NavbarTop />
      <div className="flex-grow flex overflow-hidden">
        <Sidebar />
        <div className="flex-grow flex flex-col gap-5 p-5 overflow-y-scroll">
          {searched
            ? searched.map((founded, key) => (
                <div
                  id="search-page-videos"
                  key={key}
                  className="flex gap-2 w-full h-36 lg:h-64"
                  onClick={() => {
                    navigate("/video");
                    selectedVideos.unshift(founded);
                  }}
                >
                  <div className="rounded-xl overflow-hidden w-2/5 h-full sm:w-1/5">
                    <img
                      src={founded.img}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col-reverse w-3/5 h-full justify-end gap-2">
                    <div className="flex items-center gap-2">
                      <div id="search-page-youtube-card-inner-rounded-image">
                        <img src={founded.channelImage} />
                      </div>
                      <p className="text-md lg:text-lg">{founded.channel}</p>
                    </div>
                    <div className="">
                      <h1 className="text-lg font-semibold pb-1 sm:text-xl md:text-2xl">
                        {founded.title} ...
                      </h1>
                      <p className="text-sm">2.3K views * 14 hours ago</p>
                    </div>
                  </div>
                </div>
              ))
            : `<h1>not found</h1>`}
        </div>
      </div>
      <Appbar />
    </section>
  );
}

export default SearchSection;
