import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Counter() {
  const formatValue = (value) => `${value}`;
  const [isAnimated, setIsAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  const handleScroll = () => {
    const element = counterRef.current;

    if (element) {
      const top = element.getBoundingClientRect().top;
      const bottom = element.getBoundingClientRect().bottom;

      const isVisible = top < window.innerHeight && bottom >= 0;
      if (isVisible) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  const resetAnimation = () => {
    setIsAnimated(false);
  };

  return (
    <>
    <div className="">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 lg:w-[70%] w-full mt-8 container">
        <div className="col-span-1 mx-auto">
          <div className="flex items-center gap-4 justify-start">
            <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p>
            <div className="flex justify-center items-center mx-auto gap-1">
              {/* <p className="text-white text-[40px] font-Roboto font-medium">20</p> */}
              <CountUp
                className="text-white font-medium font-Roboto text-[40px]"
                start={0}
                  end={20}
                  duration={10}
                  formattingFn={formatValue}
                  redraw={true}
                  step={20}
              />
              <p className="text-customGreen-para text-[40px] font-Roboto">+</p>
            </div>
          </div>
          <p className="text-white text-[20px] font-Roboto ">
            EXPERIENCED STAFF
          </p>
        </div>
        {/* ......................... */}

        <div className="col-span-1 mx-auto">
          <div className="flex items-center gap-4 justify-start">
            <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p>
            <div className="flex justify-center items-center mx-auto gap-1">
              {/* <p className="text-white text-[40px] font-Roboto font-medium">100</p> */}
              <CountUp
                className="text-white font-medium font-Roboto text-[40px]"
                start={0}
                end={100}
                duration={10}
                formattingFn={formatValue}
                redraw={true}
                step={20}

              />
              <p className="text-customGreen-para text-[40px] font-Roboto">+</p>
            </div>
          </div>
          <p className="text-white text-[20px] font-Roboto text-center">
            SATISFIED CLIENTS
          </p>
        </div>
        {/* .............................. */}
        <div className="col-span-1 mx-auto ">
          <div className="flex items-center gap-4 justify-start">
            <p className="border-r-2 border-customGreen-light w-[40px] h-[40px] lg:block hidden"></p>
            <div className="flex justify-center items-center mx-auto gap-1">
              {/* <p className="text-white text-[40px] font-Roboto font-medium">400</p> */}
              <CountUp
                className="text-white font-medium font-Roboto text-[40px]"
                start={0}
                end={400}
                duration={10}
                formattingFn={formatValue}
                redraw={true}
                step={20}

              />
              <p className="text-customGreen-para text-[40px] font-Roboto">+</p>
            </div>
          </div>
          <p className="text-white text-[20px] font-Roboto text-center">
            COMPLETED PROJECTS
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Counter;
