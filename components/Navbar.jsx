import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/* Every child of next/link here must be a literal <a>. Next 12 only forwards
   href to the child when `child.type === 'a'` (or with passHref) — a wrapper
   component or a <div> silently renders an anchor with no href, which is not
   a link at all: not crawlable, no SEO value, no middle-click, no copy link
   address. That is what a custom <MyLink> class here used to do to the whole
   navbar. Link still calls the child's own onClick before navigating, so
   closing the mobile menu needs no wrapper. */

export default function Navbar(props) {
  const router = useRouter();
  const { asPath } = router;

  const [navItems, setNavItems] = useState([
    { name: "About", id: "2", href: "/about" },
    // was Portfolio -> /#portfolio, an anchor no longer on the page.
    // Resume was dropped: /#resume was also dead, and the PDF is already
    // linked from the hero, the Experience section, the footer and the
    // case-studies index.
    { name: "Case Studies", id: "3", href: "/case-studies" },
    { name: "Contact", id: "5", href: "/#contact" },
    { name: "Library", id: "6", href: "/library" },
  ]);

  /* asPath carries query and hash, and exact equality misses detail routes
     like /case-studies/veem. One helper so the desktop and mobile lists
     cannot drift apart. */
  const path = asPath.split("?")[0].split("#")[0];
  const isActive = (href) =>
    href.startsWith("/#")
      ? false
      : href === "/"
      ? path === "/"
      : path === href || path.startsWith(href + "/");

  const activeNavStyle =
    "text-amber-600 dark:text-amber-500 p-2 text-xs font-semibold cursor-pointer mx-1 border-b-2 border-amber-600 dark:border-amber-500";
  const normalNavStyle =
    "text-zinc-800 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-800 p-2 text-xs font-semibold duration-300 cursor-pointer";

  const navList = navItems.map((item) => (
    <Link href={item.href} key={item.id}>
      <a
        aria-current={isActive(item.href) ? "page" : undefined}
        className={isActive(item.href) ? activeNavStyle : normalNavStyle}
      >
        {item.name}
      </a>
    </Link>
  ));

  const mobileNavStyle =
    "block focus:outline-none duration-300 font-display font-semibold hover:bg-amber-50 dark:hover:bg-brown-800 dark:hover:text-brown-300 px-3 py-2 rounded-md text-xs md:text-sm cursor-pointer";

  const navListMobile = navItems.map((item) => (
    <Link href={item.href} key={item.id}>
      <a
        onClick={closeNavList}
        aria-current={isActive(item.href) ? "page" : undefined}
        className={`${
          isActive(item.href)
            ? "bg-amber-50 text-amber-800 border border-amber-100 dark:bg-brown-900 dark:text-brown-300 dark:border-brown-700"
            : "text-navbar-brown dark:text-gray-300"
        } ${mobileNavStyle}`}
      >
        {item.name}
      </a>
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
        <nav className="bg-paper dark:bg-brown-950 duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center text-gray-800 dark:text-gray-300 font-display font-bold text-xs md:text-sm uppercase">
                <Link href="/">
                  <a
                    onClick={closeNavList}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="bg-[url('~/assets/mobile-jumbotron.jpg')] md:bg-[url('https://avatars.githubusercontent.com/u/67398035?v=4')] dark:bg-footer h-8 w-8 lg:h-10 lg:w-10 bg-cover rounded-full mx-auto my-auto mr-2 font-header">
                      {/* PROFILE IMAGE - ABOUT SECTION*/}
                    </div>
                    <h1>Ejei-Okeke Emmanuel</h1>
                  </a>
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
            <hr className="-mx-4 w-auto border-[0.6px] border-gray-200 dark:border-gray-800 mb-4" />
            {navListMobile}
          </div>
        </nav>
      </div>
    </header>
  );
}
