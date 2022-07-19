import React from "react";
import "./home-page.css";
import NavbarTop from "../../navbar/navbar-top/navbar-top";

//additional
import { keywords } from "../../../assets/links/keyword";

function HomeSection() {
  return (
    <section className="w-full h-screen flex flex-col">
      <NavbarTop />

      <div id="home-page-main" className="border flex-grow flex overflow-x-hidden">
        <div className="w-32 flex flex-col items-center border border-blue-400 ">
      
        </div>
        <div className="w-full flex-grow">
          <div
            id="home-page-keywords"
            className="w-full flex items-center gap-5 px-7 py-3"
          >
            {keywords.map((keyword, key) => (
              <div
                id="home-page-keys"
                key={key}
                className="px-5 py-1 text-white rounded-2xl shadow-md"
              >
                {keyword.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
