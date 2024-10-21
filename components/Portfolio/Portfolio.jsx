import React from "react";
import PortfolioTile from "./PortfolioTile";

export default function Portfolio(props) {
  const portfolioData = [
    {
      name: "Echezona",
      link: "https://echezona.com",
      logo: "https://echezona.surge.sh/_ipx/_/svg/logo.svg",
      desc: "Experience the ease of secure transactions with an innovative payment gateway.",
      tools: "Nuxt.js, TailwindCSS",
      role: "Frontend Engineer",
    },
    {
      name: "Signature Frames NG",
      link: "https://signatureframes.com.ng",
      logo: "https://res.cloudinary.com/signatureframes/image/upload/site-assets/icon/icon.png",
      desc: "Shop Exquisite Frames & Canvas Art Prints",
      tools: "Nuxt.js, TailwindCSS, Node.js",
      role: "Web Developer",
    },
    {
      name: "Yana",
      link: "https://yana.finance",
      logo: "https://assets.pennee.space/svg/logo/logo-icon-primary.svg",
      desc: "Corporate Credit Accounts and Cash Flow Management Software.",
      tools: "Nuxt.js, TailwindCSS",
      role: "Frontend Engineer",
    },
    {
      name: "Loiztravels",
      link: "https://loiztravels.com",
      logo: "https://res.cloudinary.com/loiztours/image/upload/site-media/svg/logo.svg",
      desc: "E-commerce travel website",
      tools: "Nuxt.js, Vuetify, Commerce.js",
      role: "Lead Frontend Developer",
    },
    {
      name: "Bookeverything NG",
      link: "https://bookeverything.ng",
      logo: "https://bookeverything.ng/img/logo.jpg",
      desc: "E-commerce book store",
      tools: "Nuxt.js, Node.js, Vuetify",
      role: "Web Developer",
    },
    {
      name: "Emino FPL",
      link: "https://emino-football.vercel.app/",
      logo: "https://emino-football.vercel.app/img/logo.svg",
      desc: "Private league website for Fantasy Premier League enthusiasts",
      tools: "Nuxt.js, TailwindCSS",
      role: "Web Developer",
    },
    {
      name: "Eki Live",
      link: "https://app.ekilive.africa/",
      logo: "https://app.ekilive.africa/public/img/logo-1692181256.png",
      desc: "Platform for creators to manage and monetize their businesses & communities",
      tools: "HTML, CSS, JS",
      role: "Frontend Developer",
    },
    {
      name: "Weather App",
      link: "https://emino-weather-app.surge.sh/",
      logo: "https://i.pinimg.com/originals/30/b1/1a/30b11a92a85361de088b6d668785f0aa.jpg",
      desc: "Simple Weather PWA. Get weather information of current location or any city of choice.",
      tools: "Nuxt.js, Vuetify, Chart.js, Openweathermap",
      role: "Web Developer",
    },
  ];

  const portfolioList = portfolioData.map((item) => (
    <PortfolioTile portfolioItem={item} key={item.name} />
  ));

  return (
    <div
      id="portfolio"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      ref={props.portfolioRefProp}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <h3 className="text-center font-semibold text-2xl lg:text-4xl pt-12">
        Portfolio
      </h3>
      <div className="text-center font-medium lg:text-lg py-6">
        Discover how I've combined design and functionality to deliver
        exceptional results!
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioList}
      </div>
    </div>
  );
}
