import React, { useState, useEffect } from "react";
import { useTrail, a } from "react-spring";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 60 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default function Jumbotron(props) {
  const [open, setOpen] = useState(true);
  const [role, setRole] = useState("Software Engineer");

  useEffect(() => {
    console.log("Mounted");
    setInterval(() => {
      setTimeout(() => {
        setRole("Software Engineer");
      }, 3000);
      setTimeout(() => {
        setRole("Startup Enthusiast");
      }, 6000);
      setTimeout(() => {
        setRole("Google Certified Digital Marketer");
      }, 9000);
      setTimeout(() => {
        setRole("Blockchain/AI Enthusiast");
      }, 12000);
    }, 12000);
  }, []);

  return (
    <div
      className="bg-mobile-jumbotron md:dark:bg-desktop-jumbotron-dark md:bg-desktop-jumbotron bg-center md:bg-right bg-cover lg:bg-fixed h-screen z-10"
      onClick={() => setOpen((state) => !state)}
      ref={props.homeRefProp}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {" "}
        {/*CONTAINER*/}
        <div className="py-20 w-full flex items-center h-full justify-center">
          <div className="text-gray-300 md:text-whitish-blue h-2/5 md:w-1/2">
            <Trail open={open} className="text-center md:text-left">
              <span className="text-2xl md:text-2xl lg:text-3xl font-semi-bold">
                {"<hello world />"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semi-bold">
                I&apos;m Emino
              </h1>
              <span className="text-sm md:text-sm font-semibold lg:text-sm">
                {role}
              </span>
            </Trail>
          </div>
        </div>
      </div>
    </div>
  );
}
