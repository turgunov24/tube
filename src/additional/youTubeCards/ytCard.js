import * as React from "react";
import axios from "axios";
import "./ytCard.css";

//additional
import { motion } from "framer-motion";

const customDataAnimation = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type:"spring",
      stiffness:100
    },
  },
};

export default function YouTubeCard() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setdata(res.data.slice(0, 10)));
  }, []);

  return (
    <div
      id="main-div"
      className="flex-grow flex flex-wrap gap-5 p-5 items-start justify-center md:justify-start"
    >
      {data &&
        data.map((card, index) => {
          return (
            <motion.div
              variants={customDataAnimation}
              initial="hidden"
              animate="visible"
              whileHover={{
                cursor: "pointer",
              }}
              key={index}
              className="shadow-2xl shadow-zinc-700 rounded-2xl w-64 h-80 flex flex-col items-start gap-2 p-2 "
            >
              <img src={card.url} alt={card.id} />
              <h2>{card.title.slice(0, 10)}</h2>
            </motion.div>
          );
        })}
    </div>
  );
}
