import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

class MyLink extends React.Component {
  render() {
    const { onCustomClick, ...props } = this.props;
    return <a {...props} onClick={this.handleClick} />;
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  };
}

export default function Navbar(props) {
  const router = useRouter();
  const { asPath } = router;

  const [navItems, setNavItems] = useState([
    { name: "About", id: "2", href: "/about" },
    { name: "Resume", id: "4", href: "/#resume" },
    { name: "Portfolio", id: "3", href: "/#portfolio" },
    { name: "Contact", id: "5", href: "/#contact" },
    { name: "Library", id: "6", href: "/library" },
  ]);

  const activeNavStyle =
    "text-amber-600 dark:text-amber-800 p-2 text-xs font-semibold cursor-pointer mx-1 border-b-2 border-amber-600 dark:border-amber-800";
  const normalNavStyle =
    "text-zinc-800 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-800 p-2 text-xs font-semibold duration-300 cursor-pointer";

  const navList = navItems.map((item) => (
    <Link id={item.id} href={item.href} key={item.id}>
      <MyLink
        className={asPath === item.href ? activeNavStyle : normalNavStyle}
      >
        {item.name}
      </MyLink>
    </Link>
  ));

  const navListMobile = navItems.map((item) => (
    <Link id={item.id} href={item.href} key={item.id}>
      <MyLink
        className={`${
          asPath === item.href
            ? "bg-amber-50 text-amber-800 border border-amber-100 dark:bg-brown-900 dark:text-brown-300 dark:border-brown-700"
            : "text-navbar-brown"
        } "d-block block focus:outline-none duration-300 font-display font-semibold hover:bg-amber-50 dark:text-gray-300 dark:hover:bg-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md text-xs md:text-sm cursor-pointer"`}
      >
        {item.name}
      </MyLink>
    </Link>
  ));

  const [isOpen, setIsOpen] = useState(false);

  function toggleNavList() {
    setIsOpen(!isOpen);
  }
  function closeNavList() {
    setIsOpen(false);
  }

  return (
    <header className="navbar w-full sticky top-0 left-0 z-[100]">
      <div className="">
        <nav className="bg-white dark:bg-brown-950 duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center text-gray-800 dark:text-gray-300 font-display font-bold text-xs md:text-sm uppercase">
                <Link href="/">
                  <div className="flex items-center cursor-pointer">
                    <div className="bg-[url('~/assets/mobile-jumbotron.jpg')] md:bg-[url('https://avatars.githubusercontent.com/u/67398035?v=4')] dark:bg-footer h-8 w-8 lg:h-10 lg:w-10 bg-cover rounded-full mx-auto my-auto mr-2 font-header">
                      {/* PROFILE IMAGE - ABOUT SECTION*/}
                    </div>
                    <h1 onClick={() => closeNavList()}>Ejei-Okeke Emmanuel</h1>
                  </div>
                </Link>
              </div>

              <div className="flex items-center">
                <div className="hidden md:block font-display">
                  {" "}
                  {/* NAVLIST. HIDE CONTENT ON PHONES. SHOW FOR LAPTOPS AND TABLETS*/}
                  {navList}
                </div>
                <div className="flex">
                  {" "}
                  <div className="ml-10 flex items-baseline space-x-4">
                    <button
                      className="text-gray-800 dark:text-gray-300 focus:outline-none"
                      onClick={props.toggleDarkMode}
                    >
                      {/*DARK MODE TOGGLE BUTTON */}
                      <span
                        className={`${
                          props.darkMode ? "fa-moon-o" : "fa-sun-o"
                        } " fa p-2 text-2xl font-thin"`}
                      ></span>
                    </button>
                    <button
                      className="text-gray-800 dark:text-gray-300 focus:outline-none md:hidden"
                      onClick={toggleNavList}
                    >
                      {/*MOBILE TOGGLE BUTTON */}
                      <span className="fa fa-bars p-2 text-2xl font-thin"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              !isOpen ? "max-h-0 pt-0 pb-0" : "max-h-fit pt-2 pb-4"
            } md:hidden overflow-hidden animate-dropdown px-4 duration-500`}
          >
            {/* NAVLIST SHOW CONTENT ON PHONES. HIDE FOR LAPTOPS AND TABLETS*/}
            <hr className="-ml-5 w-[125%] border-[0.6px] border-gray-200 dark:border-gray-800 mb-4" />
            {navListMobile}
          </div>
        </nav>
      </div>
    </header>
  );
}
