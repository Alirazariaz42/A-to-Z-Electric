import Group1 from "../../public/png/group1.png";
import Afford1 from "../../public/png/afford1.png";
import Afford2 from "../../public/png/afford2.png";
import Afford3 from "../../public/png/afford3.png";

function Banner() {
  return (
    <>
      {/* <div
        className=" w-full h-auto bg-cover bg-center mt-8"
        style={{ backgroundImage: `url(${"/png/second.png"})` }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-full">
          <div>
            <img src={Group1} alt="" />
          </div>
          <div>
        <p className="text-white font-Roboto font-extrabold text-[75px] leading-[70px]">Electrical Technician <span className="text-customGreen-light">Services</span></p>
         
         <p className="text-white text-[18px] mt-3 lg:w-[50%] w-full ">Contact us today to schedule your service and experience the difference firsthand!</p>
         
         <div className="flex justify-start gap-3">
          <div>
            <img src={Picy1} alt="" />
          </div>
         </div>


          </div>
        </div>
      </div> */}

      <div
        className=" max-w-full h-auto bg-cover bg-center "
        style={{ backgroundImage: `url(${"/png/second.png"})` }}
      >
        <div className="lg:flex grid justify-start gap-6 ">
          <div>
            <img src={Group1} alt="" />
          </div>
          <div className="self-center p-2">
            <p className="text-white font-Roboto font-extrabold text-[60px] leading-[70px]">
              Electrical Technician{" "}
              <span className="text-customGreen-light">Services</span>
            </p>
            <p className="text-white text-[18px] mt-3 lg:w-[50%] w-full ">
              Contact us today to schedule your service and experience the
              difference firsthand!
            </p>

            <div className="flex  justify-start gap-8 mt-4">
              <div className="">
                <img src={Afford1} alt="" className="w-[70px] h-[70px] mx-auto"/>
                <p className="text-white text-[16px] mt-2">Professional</p>
              </div>
              <div>
                <img src={Afford2} alt="" className="w-[70px] h-[70px] mx-auto"/>
                <p className="text-white text-[16px] mt-2">Affordable</p>
              </div>
              <div>
                <img src={Afford3} alt="" className="w-[70px] h-[70px] mx-auto" />
                <p className="text-white text-[16px] mt-2">Free Transport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
