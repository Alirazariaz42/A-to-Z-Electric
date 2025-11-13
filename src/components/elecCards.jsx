import Work from "../../public/png/workk.png";
import Work1 from "../../public/png/fireCradpic.png";
import Work2 from "../../public/png/work2.png";
import { Link } from "react-router-dom";

function ElecCards() {
  return (
    <>

<h2 className="text-white  font-Roboto text-[24px] font-semibold text-center  mt-8">
Other Main Services{" "}
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-16 container mx-auto">
      <div className="border-dashed border-2 border-customGreen-light p-6 rounded-lg">
        <div className="bg-[#4ddd93af] rounded-lg p-2">
          <img src={Work} alt="" className="mx-auto -mt-12" />
          <p className="text-white text-[20px] font-bold text-center mt-2">
            FIRE SAFETY
          </p>
          <p className="text-white text-[18px] font-light text-center ">
          Effective fire safety solutions for homes and businesses. Ensure protection with our expert assessments, installations, and maintenance services
          </p>
          <Link to="/fire">
          <div className="flex justify-center items-center mx-auto cursor-pointer mt-2 w-[90px] p-2 round-class bg-[#2fb999]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          </Link>
        </div>
        </div>
        {/* .................................... */}

        <div className="border-dashed border-2 border-customGreen-light p-6 rounded-lg">
        <div className="bg-[#4ddd93af] rounded-lg p-2">
          <img src={Work1} alt="" className="mx-auto -mt-12" />
          <p className="text-white text-[20px] font-bold text-center mt-2">
            CONTROL SYSTEM
          </p>
          <p className="text-white text-[18px] font-light text-center ">
          Efficient control system solutions tailored for your needs. Enhance functionality and optimize operations with our expert installations and support.
          </p>
          <Link to="/control">
          <div className="flex justify-center items-center mx-auto cursor-pointer mt-2 w-[90px] p-2 round-class bg-[#2fb999]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          </Link>
        </div>
        </div>
        {/* ................................ */}
        <div className="border-dashed border-2 border-customGreen-light p-6 rounded-lg">
        <div className="bg-[#4ddd93af] rounded-lg p-2">
          <img src={Work2} alt="" className="mx-auto -mt-12" />
          <p className="text-white text-[20px] font-bold text-center mt-2">
          METER INSTALLATION
          </p>
          <p className="text-white text-[18px] font-light text-center ">
          Reliable meter installation services for accurate monitoring. Trust our experts for precise installations tailored to your needs
          </p>
          <Link to="/meter">
          <div className="flex justify-center items-center mx-auto cursor-pointer mt-2 w-[90px] p-2 round-class bg-[#2fb999]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          </Link>
        </div>
        </div>

      </div>
    </>
  );
}

export default ElecCards;
