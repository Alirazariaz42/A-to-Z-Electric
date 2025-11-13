

import { useState } from "react";
import { TECollapse } from "tw-elements-react";

function Faq() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <h5 className="text-[#099F7A] mt-8 font-Roboto text-[24px] font-semibold text-center">
        FAQ's{" "}
      </h5>
      <p className="text-white text-[18px] font-light text-center font-Nunito">Answer to the Frequently Asked Question</p>

      <div className="lg:w-[55%] w-[90%] mx-auto mt-6">
        <div id="accordionExample">
          <div className="rounded-md cursor-pointer bg-white overflow-hidden">
            <h2 className="mb-0 font-bold" id="headingOne">
              <p
                className={`${
                  activeElement === "element1" && `text-primary hover:bg]`
                } group relative flex w-full items-center border-0 bg-[#064b3b]  px-5 py-4 text-left text-base text-white  `}
                type="button"
                onClick={() => handleClick("element1")}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What types of Electrical Work do you handle?
                <span
                  className={`${
                    activeElement === "element1"
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 fill-white  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </p>
            </h2>
            <TECollapse
              show={activeElement === "element1"}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              <div className="p-8 overflow-auto text-customGreen-para bg-white rounded-none">
              We handle all types of electrical work, from installations and repairs to maintenance and upgrades. Whether it's residential, commercial, or industrial, our skilled electricians are ready to assist.
              </div>
            </TECollapse>
          </div>
          {/* ......................................... */}
        </div>
        <div className="rounded-md mt-2 cursor-pointer bg-white overflow-hidden">
          <h2 className="mb-0 font-bold" id="headingTwo">
            <p
              className={`${
                activeElement === "element2"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center border-0 bg-[#064b3b]  px-5 py-4 text-left text-base text-white `}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Are your electricians certified?
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-white dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </p>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="p-8 bg-white rounded-none text-customGreen-para">
            Yes, all our electricians are fully certified and have extensive experience in the electrical industry. They are trained to handle a wide variety of electrical tasks safely and efficiently.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-md mt-2 cursor-pointer bg-white overflow-hidden">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <p
              className={`${
                activeElement === "element3"
                  ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                  : `transition-none `
              } group relative flex w-full items-center border-0 bg-[#064b3b]  px-5 py-4 text-left text-base text-white `}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How quickly can you respond to service requests?
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </p>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 bg-white rounded-none text-customGreen-para">
            We strive to respond to all service requests as quickly as possible. Our team is committed to providing timely and efficient service to minimize any disruptions to your daily routine.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
        <div className="rounded-md mt-2 cursor-pointer bg-white overflow-hidden">
          <h2 className="accordion-header mb-0 font-bold" id="headingThree">
            <p
              className={`${
                activeElement === "element4"
                  ? `text-primary `
                  : `transition-none `
              } group relative flex w-full items-center bg-[#064b3b]  px-5 py-4 text-left text-base text-white `}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             What electrical services do you provide?
              <span
                className={`${
                  activeElement === "element4"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] `
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </p>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !shadow-none"
          >
            <div className="p-8 bg-white rounded-none text-customGreen-para">
            We offer a wide range of electrical services, including Electrical Work, Control Systems, Fire Safety, and Meter Installation. Our team of experienced electricians is equipped to handle projects of all sizes.
            </div>
          </TECollapse>
        </div>
        {/* ..................................... */}
       
      </div>
    </>
  );
}

export default Faq;
