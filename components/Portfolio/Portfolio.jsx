import React from 'react'
import PortfolioTile from './PortfolioTile'

export default function Portfolio(props) {
  const portfolioData = [
    {
      name: "Yana Website",
      link: "https://yana.finance",
      logo: "https://assets.pennee.space/svg/logo/logo-icon-primary.svg",
      desc: "Corporate Credit Accounts and Cash Flow Management Software.",
      tools: "Nuxt.js, TailwindCSS",
    },
    {
      name: "Yana Dashboard",
      link: "https://app.yana.finance",
      logo: "https://assets.pennee.space/svg/logo/logo-icon-light.svg",
      desc: "Corporate Credit Accounts and Cash Flow Management Software.",
      tools: "Nuxt.js, TailwindCSS, Vuetify",
    },
    {
      name: "Loiztravels",
      link: "https://uat.loiztravels.com",
      logo: "https://res.cloudinary.com/loiztours/image/upload/site-media/svg/logo.svg",
      desc: "E-commerce travel website",
      tools: "Nuxt.js, Vuetify, Commerce.js",
    },
    {
      name: "Bookeverything NG",
      link: "https://bookeverything.ng",
      logo: "https://bookeverything.ng/img/logo.jpg",
      desc: "E-commerce book store",
      tools: "Nuxt.js, Vuetify",
    },
    {
      name: "Yana Shop",
      link: "https://shop.withyana.co",
      logo: "https://assets.pennee.space/svg/logo/logo-icon-light.svg",
      desc: "E-commerce website for Yana. Buy the best things in season.",
      tools: "Nuxt.js, TailwindCSS",
    },
    {
      name: "Emino FPL",
      link: "https://emino-football.vercel.app/",
      logo: "https://emino-football.vercel.app/img/logo.svg",
      desc: "Private league website for Fantasy Premier League enthusiasts",
      tools: "Nuxt.js, TailwindCSS",
    },
    {
      name: "Pennee (Now Yana)",
      link: "https://pennee.surge.sh",
      logo: "/pennee-logo-icon.svg",
      desc: "Credit Financing company for small businesses in Nigeria",
      tools: "Nuxt.js, Vuetify, GraphQL",
    },
    {
      name: "Pennee Partners",
      link: "https://partners.pennee.tech",
      logo: "/pennee-logo-icon.svg",
      desc: "Provide credit purchases without bearing the risk. We connect you to buyers and pay for their purchases.",
      tools: "Nuxt.js, Vuetify",
    },
    {
      name: "Eki Live",
      link: "https://app.ekilive.africa/",
      logo: "https://app.ekilive.africa/public/img/logo-1692181256.png",
      desc: "Platform for creators to manage and monetize their businesses & communities",
      tools: "HTML, CSS, JS",
    },
    {
      name: "Nexbuyapp",
      link: "https://nexbuyv2.netlify.app/",
      logo: "https://nexbuyv2.netlify.app/_nuxt/img/redlogo.c5768a4.png",
      desc: "Nexbuy E-commerce web app. Buy, sell , brand your products",
      tools: "Nuxt.js, Vuetify",
    },
    {
      name: "Weather App",
      link: "https://emino-weather-app.surge.sh/",
      logo: "https://i.pinimg.com/originals/30/b1/1a/30b11a92a85361de088b6d668785f0aa.jpg",
      desc: "Simple Weather PWA. Get weather information of current location or any city of choice.",
      tools: "Nuxt.js, Vuetify, Chart.js, Openweathermap",
    },
    // {
    //   name: "Newsletter Signup",
    //   link: "https://emino-newsletter-signup.herokuapp.com/",
    //   logo: "https://emino-newsletter-signup.herokuapp.com/images/newsletter-icon.png",
    //   desc: "Simple newsletter sign-up/subscribe page built with Bootstrap, Node.js and Mailchimp api",
    //   tools: "EJS, Bootstrap, Node.js",
    // },
    {
      name: "Simon Game",
      link: "https://therealemino.github.io/practice-repo/simon%20game/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Simon_Electronic_Game.jpg",
      desc: "Online version of the Simon Game built with Vanilla Javascript",
      tools: "HTML, CSS, JavaScript",
    },
  ]

  const portfolioList = portfolioData.map(item =>
    <PortfolioTile portfolioItem={item} key={item.name} />
  )

    return (
        <div id='portfolio' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={props.portfolioRefProp} data-aos="zoom-in" data-aos-duration="2000">
          <div className="text-center font-semibold font-nunito text-4xl pt-12">Portfolio</div>
          <div className="text-center font-semibold font-nunito text-xl py-6">Here are a few projects I've worked on, both independently and collaboratively with teams.</div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch font-nunito">
              {portfolioList}
            </div>
        </div>
    )
}
