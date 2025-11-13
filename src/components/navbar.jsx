import Logo from "../../public/png/log.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Example from "./example";
import Modal from "./modal";

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [activeLink, setActiveLink] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [clickForm, setClickForm] = useState(false);
  const handleClick = () => setClickForm(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hello, setHello] = useState(false);

  const openModal = () => {
    setHello(true);
  };

  const closeModal = () => {
    setHello(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed max-w-full container z-20 mx-auto shadow-lg navbarr ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="">
          <div className="flex justify-between mt-1">
            <Link to="/">
              <img className="cursor-pointer mx-auto w-[100%] h-[70px]" src={Logo} alt="" />
            </Link>

            <div className="class-hide-nav">
              <div className="flex justify-center gap-6 mt-[8px] ">
                <Link to="/">
                  <p className="btn font-semibold">
                    {pathname === "/" ? (
                      <div className="border-b-2 border-customGreen-light">
                        Home
                      </div>
                    ) : (
                      "Home"
                    )}
                  </p>
                </Link>

                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex justify-start">
                    <p className="btn font-semibold flex justify-center gap-2">
                      {pathname === "/service" ? (
                        <div className="border-b-2 border-customGreen-light">
                          Services
                        </div>
                      ) : (
                        "Services"
                      )}

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mt-[6px] text-white font-bold"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </p>
                  </div>

                  {isHovered && (
                    <div className="absolute bg-gray-200 rounded-md w-[180px] h-[134px] shadow-lg  border z-10">
                      <Link
                        to="/electrical"
                        onClick={() => setActiveLink("electrical")}
                        className=""
                      >
                        <p
                          className={`text-[16px] font-medium text-black mt-3 text-center ${
                            activeLink === "demolition"
                              ? "text-black"
                              : "hover:text-white hover:bg-customGreen-light hover:font-bold"
                          }`}
                        >
                          Electrical Work
                        </p>
                      </Link>
                      <Link
                        to="/control"
                        onClick={() => setActiveLink("control")}
                      >
                        <p
                          className={`text-[16px] font-medium text-black text-center mt-1 ${
                            activeLink === "plumbing"
                              ? "text-black"
                              : "hover:text-white hover:bg-customGreen-light hover:font-bold"
                          }`}
                        >
                          Control System
                        </p>
                      </Link>

                      <Link to="/meter" onClick={() => setActiveLink("meter")}>
                        <p
                          className={`text-[16px] font-medium text-black text-center mt-1 ${
                            activeLink === "plumbing"
                              ? "text-black"
                              : "hover:text-white hover:bg-customGreen-light hover:font-bold"
                          }`}
                        >
                          Meter Installation
                        </p>
                      </Link>

                      <Link to="/fire" onClick={() => setActiveLink("fire")}>
                        <p
                          className={`text-[16px] font-medium text-black text-center mt-1 ${
                            activeLink === "plumbing"
                              ? "text-black"
                              : "hover:text-white hover:bg-customGreen-light hover:font-bold"
                          }`}
                        >
                          Fire Safety
                        </p>
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/about/">
                  <div className="flex justify-start gap-1">
                    <p className=" btn font-semibold">
                      {pathname === "/about/" ? (
                        <div className="border-b-2 border-customGreen-light">
                          About Us
                        </div>
                      ) : (
                        "About Us"
                      )}
                    </p>
                  </div>
                </Link>

                <Link to="/contact/">
                  <p className="btn font-semibold ">
                    {pathname === "/contact/" ? (
                      <div className="border-b-2 border-customGreen-light">
                        {" "}
                        Contact Us
                      </div>
                    ) : (
                      " Contact Us"
                    )}
                  </p>
                </Link>
              </div>
            </div>
            <div className="hidden md:block self-center">
              <div className="button">
                <button onClick={openModal} className="">
                  Get Service
                </button>
              </div>
              {hello && <Modal closeModal={closeModal} />}
            </div>

            <div className="flex md:hidden justify-end mt-5">
              <input type="checkbox" id="checkbox" />
              <label onClick={() => setOpen(true)} className="toggle">
                {/* <div className="bars" id="bar1"></div> */}
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
              </label>
            </div>
          </div>

          <Example open={open} setOpen={handleOnClose} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
