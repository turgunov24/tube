import * as React from "react";
import axios from "axios";
import "./ytCard.css"

export default function YouTubeCard() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setdata(res.data.slice(0, 10)));
  }, []);

  return (
    <div id="main-div" className="flex-grow flex flex-wrap gap-5 p-5 items-start justify-center md:justify-start">
      {data && data.map((card, index) =>(
      <div
        key={index}
        className="shadow-2xl shadow-zinc-700 rounded-2xl w-64 h-80 flex flex-col items-start gap-2 p-2 "
      >
        <img src={card.url} alt={card.id} />
        <h2>{card.title.slice(0, 10)}</h2>
      </div>
      ))}
    </div>
  );
}
