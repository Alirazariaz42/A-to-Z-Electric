import { useEffect } from "react";
import Heroo from "../../public/png/hero.png";
import Counter from "./counter";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        Aos.init({ duration: 2000, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard(); // Re-enable AOS on larger screens
      } else {
        Aos.init({ disable: true }); // Disable AOS on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  

  return (
    <>
      <div className="pt-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-3 w-full container mx-auto">
          <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
            <p className="text-customGreen-para font-Nunito text-[16px] font-bold ">
              Welcome to A to Z Electric
            </p>
            <h1 className="text-[24px] font-Nunito text-white font-bold leading-8">
              Powering Your World with{" "}
              <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
                Reliable Electricity Solution
              </span>
            </h1>

            <p className="text-white font-Nunito text-[18px] font-light mt-1">
              Join thousands of satisfied customers who trust us for reliable
              and professional electrical services. From installations to safety
              measures, we ensure your power needs are met with excellence.
            </p>

            <div
            // className=" border text-customGreen-para p-3 rounded-lg w-[150px] cursor-pointer mt-4 hover:bg-customGreen-light hover:text-white flex justify-center items-center">
            >
              <button className="button mt-4 mb-8 z-10">Get Started</button>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src={Heroo}
              alt=""
              className=" lg:float-right block mx-auto"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* ............................ */}

      <Counter />
    </>
  );
}

export default Hero;
