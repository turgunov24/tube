import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ytCard.css";
import { customYoutubeData } from "../youtubeData/youtubeData";

//additional
import { motion } from "framer-motion";

export const customDataAnimation = {
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

export const selectedVideos = [];

export default function YouTubeCard() {
  const [data, setdata] = useState(customYoutubeData);

  // const options = {
  //   method: "GET",
  //   url: "https://youtube138.p.rapidapi.com/playlist/videos/",
  //   params: { id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr", hl: "en", gl: "US" },
  //   headers: {
  //     "X-RapidAPI-Key": "8b44c7ea48msh97966e97040f02ap146371jsnbad531f42542",
  //     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     setdata(response.data.contents);
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  // useEffect(() => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
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
                selectedVideos.unshift(card);
                navigate("/video");
                localStorage.setItem(
                  "selectedVideos",
                  JSON.stringify(selectedVideos)
                );
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
                  <div id="youtube-card-inner-rounded-image">
                    <img src={card.channelImage} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h1 className="text-lg font-semibold pb-1">
                    {card.title} ...
                  </h1>
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
