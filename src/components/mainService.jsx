import One from "../../public/png/one.png";
import Two from "../../public/png/two.png";
import Three from "../../public/png/three.png";
import Four from "../../public/png/four.png";

function MainService() {
  return (
    <>
      <h3 className="text-[#099F7A] mt-8 font-Roboto text-[24px] font-semibold text-center">
        Our Main Services
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-3 container mx-auto mb-8">
        <div className="bg-white hover:bg-[#79d3a4] class-transition rounded-md p-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto divide-x-2">
            <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
              <img src={Four} alt="" className="mx-auto" />
            </div>
            <div className="col-span-2">
              <p className="text-customGreen-para text-[20px] pl-2 font-semibold font-Nunito">
                Electrical Work
              </p>
              <p className=" text-[16px] pl-2 font-normal font-Nunito">
                Expert electrical installations and repairs for homes and
                businesses. Trust our skilled team to handle all your electrical
                needs with precision and reliability.
              </p>
              <div className=" hover:bg-customGreen-para cursor-pointer text-black hover:text-white flex justify-center items-center border rounded-lg p-2 w-[120px] ml-2 mt-2">
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
        {/* ............................................ */}
        <div className="bg-white hover:bg-[#79d3a4] class-transition rounded-md p-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto divide-x-2">
            <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
              <img src={Three} alt="" className="mx-auto" />
            </div>
            <div className="col-span-2">
              <p className="text-customGreen-para text-[20px] pl-2 font-semibold font-Nunito">
                Control System
              </p>
              <p className=" text-[16px] pl-2 font-normal font-Nunito">
                Efficient control system solutions tailored for your needs.
                Enhance functionality and optimize operations with our expert
                installations and support.
              </p>
              <div className=" hover:bg-customGreen-para cursor-pointer text-black hover:text-white flex justify-center items-center border rounded-lg p-2 w-[120px] ml-2 mt-2">
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
        {/* ................................. */}
        <div className="bg-white hover:bg-[#79d3a4] class-transition rounded-md p-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto divide-x-2">
            <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
              <img src={Two} alt="" className="mx-auto" />
            </div>
            <div className="col-span-2">
              <p className="text-customGreen-para text-[20px] pl-2 font-semibold font-Nunito">
                Fire Safety
              </p>
              <p className=" text-[16px] pl-2 font-normal font-Nunito">
                Effective fire safety solutions for homes and businesses. Ensure
                protection with our expert assessments, installations, and
                maintenance services.
              </p>
              <div className=" hover:bg-customGreen-para cursor-pointer text-black hover:text-white flex justify-center items-center border rounded-lg p-2 w-[120px] ml-2 mt-2">
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
        {/* .............................. */}
        <div className="bg-white hover:bg-[#79d3a4] class-transition rounded-md p-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto divide-x-2">
            <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
              <img src={One} alt="" className="mx-auto" />
            </div>
            <div className="col-span-2">
              <p className="text-customGreen-para text-[20px] pl-2 font-semibold font-Nunito">
                Meter Installation
              </p>
              <p className=" text-[16px] pl-2 font-normal font-Nunito">
                Reliable meter installation services for accurate monitoring.
                Trust our experts for precise installations tailored to your
                needs.
              </p>
              <div className=" hover:bg-customGreen-para cursor-pointer text-black hover:text-white flex justify-center items-center border rounded-lg p-2 w-[120px] ml-2 mt-8">
                <p>View More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainService;
