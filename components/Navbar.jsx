import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

class MyLink extends React.Component {
  render () {
    const { onCustomClick, ...props } = this.props
    return <a {...props} onClick={this.handleClick} />
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event)
    }
  }
}

export default function Navbar(props) {
  const router = useRouter()
  
  const [ navItems,setNavItems ] = useState([
      { name: 'HOME', active:true, id:"1", href:"/" },
      { name: 'ABOUT', active:false, id:"2", href:"#about" },
      { name: 'RESUME', active:false, id:"4", href:"#resume" },
      { name: 'PORTFOLIO', active:false, id:"3", href:"#portfolio" },
      { name: 'CONTACT', active:false, id:"5", href:"#contact" }
  ]);

  const activeNavStyle = "bg-dark-blue dark:bg-light-brownish-purple text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs md:text-sm font-semibold cursor-pointer";
  const normalNavStyle = "text-navbar-brown dark:text-gray-300 hover:bg-medium-blue dark:hover:bg-brownish-purple hover:text-gray-300 px-3 py-2 rounded-md text-xs md:text-sm font-semibold duration-300 cursor-pointer";

  const navList = navItems.map((item) =>
    <Link 
    id={item.id}
    href={item.href}
    key={item.id} 
    >
      <MyLink 
        onCustomClick={() => toggleActive(item.id)}
        className = {item.active ? activeNavStyle : normalNavStyle} 
      >
        {item.name}
      </MyLink>
    </Link>
  );

  const navListMobile = navItems.map((item) =>
    <Link 
      id={item.id}
      href={item.href}
      key={item.id} 
      >
      <MyLink 
        onCustomClick={() => toggleActive(item.id)}
        className = {`${item.active ? "bg-dark-green dark:bg-light-brownish-purple text-gray-300" : "text-navbar-brown"} " d-block focus:outline-none duration-300 block dark:text-gray-300 font-semibold font-montserrat hover:bg-medium-green hover:text-gray-300 dark:hover:bg-brownish-purple px-3 py-2 rounded-md text-xs md:text-sm font-medium cursor-pointer"`}
      >
        {item.name}
      </MyLink>      
    </Link>
  );

  function toggleActive (id) {
    // console.log(id);

    setNavItems(prevValues => {
        const newNavList = prevValues.map (item => {
          if (item.id === id) {
              return {
                name : item.name,
                active : true,
                id : item.id,
                href: item.href
              }
              
            } else {
              return {
                name : item.name,
                active : false,
                id : item.id,
                href: item.href
              }
          }
        })
      return newNavList
    });
  };

  const [isOpen,setIsOpen] = useState(false);

  function toggleNavList () {
    setIsOpen(!isOpen);
  }

    return (
        <header className="navbar w-full sticky top-0 z-50">
          <div className="">
            <nav className="bg-light-green md:bg-light-blue dark:bg-dark-brown duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="block md:hidden text-gray-800 dark:text-gray-300 font-nunito font-bold text-sm"><Link href="/">Ejei-Okeke Emmanuel</Link></div>
                    <div className="hidden md:block font-montserrat"> {/* HIDE CONTENT (expanded nav-list) ON PHONES. SHOW FOR LAPTOPS AND TABLETS*/}
                      {navList}
                      {/* <h1>Ejei-Okeke Emmanuel</h1> */}
                    </div>
                  </div>

                  <div className="flex"> {/*MOBILE TOGGLE BUTTON */}
                      <div className="ml-10 flex items-baseline space-x-4">
                          <button className="text-gray-800 dark:text-gray-300 focus:outline-none" onClick={props.toggleDarkMode}>{/*DARK MODE TOGGLE BUTTON */}
                              <span className={`${props.darkMode ? "fa-sun-o" : "fa-moon-o"} " fa p-2 text-2xl font-thin"`}></span>
                          </button>
                          <button className="text-gray-800 dark:text-gray-300 focus:outline-none md:hidden" onClick={toggleNavList}>{/*MOBILE TOGGLE BUTTON */}
                              <span className="fa fa-bars p-2 text-2xl font-thin"></span>
                          </button>
                      </div>
                  </div>
                </div>
                <div className={`${isOpen ? "block" : "hidden"} " animate-dropdown md:hidden px-1 pt-2 pb-4 transition ease-out duration-100"`}>{/* SHOW CONTENT (expanded nav-list) ON PHONES. HIDE FOR LAPTOPS AND TABLETS*/}
                  {navListMobile}
                </div>

              </div>
            </nav>
          </div>

        </header>
    )
}
