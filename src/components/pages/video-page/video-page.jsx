import React, { useEffect, useState } from "react";
import "./video-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";

//additional
import { selectedVideos } from "../../../additional/youTubeCards/ytCard";
import { customYoutubeData } from "../../../additional/youtubeData/youtubeData";
import { motion } from "framer-motion";
//assets
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { MdSaveAlt } from "react-icons/md";
//animation
const animateEmotes = {
  hover: {
    y: "-3px",
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

function VideoSection() {
  const [svideo, setsvideo] = useState(selectedVideos);
  const [likeCount, setlikeCount] = useState();
  const isliked = (i) => {
    i.classList.add("hi");
  };
  return (
    <section className="w-full h-full flex flex-col overflow-hidden">
      <NavbarTop />
      {svideo && (
        <div className="flex-grow flex flex-col gap-5 p-5 overflow-hidden md:flex-row">
          <div className="flex flex-col gap-2 pb-2 w-full md:w-3/5">
            <iframe
              src={svideo[0].iframe}
              frameborder="0"
              className="rounded-xl h-[35vh] sm:h-[45vh] md:h-[50vh] xl:h-[60vh]"
            ></iframe>
            <h1 className="font-bold text-lg md:text-2xl">{svideo[0].title}</h1>
            <div className="w-full py-1 flex flex-wrap items-center justify-between gap-2">
              <p className="">2.3K views * 14 hours ago</p>
              <ul className="flex items-center gap-5 text-white">
                <li
                  onClick={() => setlikeCount(likeCount == 1 ? "" : "1")}
                  className="flex gap-2 items-center"
                >
                  <motion.h5 variants={animateEmotes} whileHover="hover">
                    {" "}
                    <AiFillLike onClick={isliked} className="emote text-xl" />
                  </motion.h5>
                  {likeCount}
                </li>
                <li className="flex gap-2 items-center">
                  <motion.h5 variants={animateEmotes} whileHover="hover">
                    {" "}
                    <AiFillDislike
                      onClick={isliked}
                      className="emote text-xl"
                    />
                  </motion.h5>
                  <h5>Dislike</h5>
                </li>
                <li className="flex gap-2 items-center">
                  <motion.h5 variants={animateEmotes} whileHover="hover">
                    <RiShareForwardFill
                      onClick={isliked}
                      className="emote text-xl"
                    />{" "}
                  </motion.h5>
                  <h5>Share</h5>
                </li>
                <li className="flex gap-2 items-center">
                  <motion.h5 variants={animateEmotes} whileHover="hover">
                    <MdSaveAlt onClick={isliked} className="emote text-xl" />{" "}
                  </motion.h5>
                  <h5>Save</h5>
                </li>
              </ul>
            </div>
            <div className="border border-green-400 w-full p-5">

            </div>
          </div>
          <div
            id="video-page-grow-div"
            className="flex-grow flex flex-col gap-3 md:w-1/3"
          >
            {customYoutubeData
              .filter((related) =>
                related.title
                  .toLowerCase()
                  .includes(svideo[0].title.slice(0, 1).toLowerCase())
              )
              .map((item, index) => (
                <div key={index} className="flex w-full h-28 gap-3 ">
                  <div className="rounded-xl overflow-hidden w-2/5">
                    <img
                      src={item.img}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-lg font-semibold pb-1">{item.title}</h1>
                    <p className="text-sm">{item.channel}</p>
                    <p className="text-sm">2.3K views * 14 hours ago</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
