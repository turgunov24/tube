import * as React from "react";
import axios from "axios";

export default function YouTubeCard() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setdata(res.data.slice(0, 10)));
  }, []);

  return data && data.map((card, index) => <div key={index} className="border w-64 h-80 flex flex-col items-start gap-2 p-2 ">
    <img src={card.url} alt={card.id} />
    <h2>{card.title.slice(0,10)}</h2>
  </div>);
}
