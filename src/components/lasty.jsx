import Four from "../../public/png/fourmeter.png";
import Three from "../../public/png/twometer.png";
import Five from "../../public/png/threemeter.png";
import Arrow from "../../public/png/arrow.png";

function Lasty() {
  return (
    <>
      <div className="bg-[#1B2721] p-8 mt-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
          <div>
            <div className="flex justify-center gap-6">
            <div>
            <img src={Four} alt="" className="mx-auto w-[200px] h-[200px]" />
            <p className="text-customGreen-para text-[22px] font-bold mt-5 text-center">
              Consultation & Information
            </p>
            <p className="text-white text-[18px] font-light mt-2 text-center">
              We'll discuss the purpose of your sub-meters, establish any
              existing sub-meters we can try to re-purpose
            </p>
            </div>

            <img src={Arrow} alt="" className="w-[50px] h-[50px] self-center" />
            </div>
          </div>
          {/* ............................... */}
          <div>
            <div className="flex justify-center gap-6">
            <div>
            <img src={Three} alt="" className="mx-auto w-[200px] h-[200px]" />
            <p className="text-customGreen-para text-[22px] font-bold mt-5 text-center">
              Survey
            </p>
            <p className="text-white text-[18px] font-light mt-2 text-center">
            Our engineers will usually survey the site .we may provide a desktop survey, we're flexible
            </p>
            </div>

            <img src={Arrow} alt="" className="w-[50px] h-[50px] self-center mt-6" />
            </div>
          </div>
          {/* ........................... */}
          <div>
            
            <img src={Five} alt="" className="mx-auto w-[200px] h-[200px]" />
            <p className="text-customGreen-para text-[22px] font-bold mt-5 text-center">
            Installation
            </p>
            <p className="text-white text-[18px] font-light mt-2 text-center">
            We'll schedule a convenient day & time, then our in-house expert engeers will install your electric or gass sub-meters.
            </p>
            </div>

            </div>
          
      </div>
    </>
  );
}

export default Lasty;
