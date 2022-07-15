import React from 'react'
import PortfolioTile from './PortfolioTile'

export default function Portfolio(props) {
  const portfolioData = [
    {
      name: "Pennee Website",
      link: "https://pennee.co",
      logo: "/pennee-logo-icon.svg",
      desc: "Pennee solves cash flow problems for small businesses by providing credit financing and cash flow management. Click to go to the website for more information."
    },
    {
      name: "Pennee Partners Dashboard",
      link: "https://partners.pennee.tech",
      logo: "/pennee-logo-icon.svg",
      desc: "Dashboard for pennee partners to provide credit purchases to pennee merchants. Authentication, Setup profile, upload photos, view transactions, generate payment links."
    },
    {
      name: "Pennee Library",
      link: "https://pennee.co/library",
      logo: "/pennee-logo-icon.svg",
      desc: "Learn how to grow your business with resources from Pennee. Access to online courses that teach the business principles behind starting and running a small business."
    },
    {
      name: "Weather App",
      link: "https://emino-weather-app.surge.sh/",
      logo: "https://i.pinimg.com/originals/30/b1/1a/30b11a92a85361de088b6d668785f0aa.jpg",
      desc: "Simple Weather PWA. Get weather information of current location or any city of choice. Built with Nuxt.js, Openweathermap (API), Vuetify (style) and Chart.js (data-visualisation)"
    },
    {
      name: "Nexbuyapp",
      link: "https://nexbuyv2.netlify.app/",
      logo: "https://nexbuyv2.netlify.app/_nuxt/img/redlogo.c5768a4.png",
      desc: "Nexbuy E-commerce web app. Buy, sell , brand your products"
    },
    {
      name: "Better Earth",
      link: "https://therealemino.github.io/climate-change-ngo/index.html",
      logo: "https://therealemino.github.io/climate-change-ngo/images/planet-earth-dan-gerhard-01.svg",
      desc: "Demo website for a climate change NGO. Donate with flutterwave test cards (not a real environment)."
    },
    {
      name: "Zettech Integrated Services",
      link: "https://therealemino.github.io/zettech/index.html",
      logo: "https://github.com/therealemino/zettech/blob/master/images/logo-sm.jpg?raw=true",
      desc: "Simple static website for a Digital agency. Built with HTML5,CSS3 and Bootstrap 4",
    },
    {
      name: "Newsletter Signup",
      link: "https://emino-newsletter-signup.herokuapp.com/",
      logo: "https://emino-newsletter-signup.herokuapp.com/images/newsletter-icon.png",
      desc: "Simple newsletter sign-up/subscribe page built with Bootstrap, Node.js and Mailchimp api"
    },
    {
      name: "Simon Game",
      link: "https://therealemino.github.io/practice-repo/simon%20game/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Simon_Electronic_Game.jpg",
      desc: "Online version of the Simon Game built with Vanilla Javascript"
    },
  ]

  const portfolioList = portfolioData.map(item =>
    <PortfolioTile portfolioItem={item} key={item.name} />
  )

    return (
        <div id='portfolio' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" ref={props.portfolioRefProp} data-aos="zoom-in" data-aos-duration="2000">
          <div className="text-center font-semibold font-nunito text-4xl pt-12">Portfolio</div>
          <div className="text-center font-semibold font-nunito text-xl py-6">Here are a few projects I've worked on individually/with a team.</div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch font-nunito">
              {portfolioList}
            </div>
        </div>
    )
}
