import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ytCard.css";
import { customYoutubeData } from "../youtubeData/youtubeData";

//additional
import { motion } from "framer-motion";

const customDataAnimation = {
  hidden: {
    opacity: 0,
    // y: "10vh",
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 1,
      duration: 1,
      // type: "spring",
      // stiffness: 100,
    },
  },
  hover: {
    cursor: "pointer",
  },
};


export const selectedVideos = []


export default function YouTubeCard() {
  const [data, setdata] = React.useState(customYoutubeData);
  // React.useEffect(() => {
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/photos`)
  //     .then((res) => setdata(res.data.slice(0, 10)));
  // }, []);

  const navigate = useNavigate();

  return (
    <div
      id="main-div"
      className="flex-grow flex flex-wrap gap-x-5 gap-y-7 p-5 items-start justify-center md:justify-start"
    >
      {data &&
        data.map((card, index) => {
          return (
            <motion.div
              key={index}
              onClick={() => {
                selectedVideos.unshift(card)
                navigate("/video")
              }}
              variants={customDataAnimation}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="w-[270px] h-64 flex flex-col items-start gap-2 p-2"
            >
              <img src={card.img} alt={card.id} className="w-full h-40" />
              {/* <h2>{card.title.slice(0, 10)}</h2> */}
              <div className="flex w-full flex-grow gap-3">
                <div>
                  <img
                    id="youtube-card-inner-rounded-image"
                    src={card.channelImage}
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-lg font-semibold pb-1">{card.title}</h1>
                  <p className="text-sm">{card.channel}</p>
                  <p className="text-sm">2.3K views * 14 hours ago</p>
                </div>
              </div>
            </motion.div>
          );
        })}
    </div>
  );
}
