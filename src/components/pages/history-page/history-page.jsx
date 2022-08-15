import React, { useState } from "react";
import "./history-page.css";
import { customDataAnimation,selectedVideos } from "../../../additional/youTubeCards/ytCard";
import { motion } from "framer-motion";
import NavbarTop from "../../navbar/navbar-top/navbar-top";
import Sidebar from "../../navbar/sidebar/sidebar";
import Appbar from "../../navbar/appbar/appbar";
import { useNavigate } from "react-router-dom";
import { stringify } from "postcss";

function HistorySection() {

  const [watched,setWatched] = useState(JSON.parse(localStorage.getItem('selectedVideos')))

  const navigate = useNavigate();
  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden">
      <NavbarTop />
      <div className="flex-grow flex justify-start overflow-hidden">
        <Sidebar />
        <div
          id="history-page-grow-div"
          className="flex-grow p-5 flex flex-wrap items-start justify-center overflow-y-scroll md:justify-start"
        >
          {watched &&
            watched.map((historyVideos, key) => (
              <motion.div
                key={key}
                onClick={() => {
                  navigate("/video");
                }}
                variants={customDataAnimation}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="w-[270px] h-64 flex flex-col items-start gap-2 p-2"
              >
                <img
                  src={historyVideos.img}
                  alt={historyVideos.id}
                  className="w-full h-40"
                />
                <div className="flex w-full flex-grow gap-3">
                  <div>
                    <div id="history-page-card-inner-rounded-image">
                      <img
                        className="w-full h-full"
                        src={historyVideos.channelImage}
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-lg font-semibold pb-1">
                      {historyVideos.title} ...
                    </h1>
                    <p className="text-sm">{historyVideos.channel}</p>
                    <p className="text-sm">2.3K views * 14 hours ago</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
      <Appbar />
    </section>
  );
}

export default HistorySection;
