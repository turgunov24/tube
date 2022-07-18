import React from "react";
import "./home-page.css"
import NavbarTop from "../../navbar/navbar-top/navbar-top";

//additional
import { keywords } from "../../../assets/links/keyword"




function HomeSection() {
  return (
    <section className="w-full h-screen flex flex-col">
      <NavbarTop />
      <div id="home-page-main" className="border flex-grow flex">
        <div id="home-page-keywords" className="border h-10 flex-grow flex items-center gap-5">
            {keywords.map((keyword,key)=>(
                <div key={key}>
                    {keyword.name}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
