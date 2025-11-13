import Design from "../../public/png/design.png";
import Design2 from "../../public/png/twoo.png";
import Design3 from "../../public/png/threee.png";
import Design4 from "../../public/png/fourr.png";

function NewStyle() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 container mx-auto mt-8 mb-8">
        <div className="">
          <div className="bg-white p-8 ">
            <p className="text-[24px] font-Nunito font-bold text-center text-customGreen-para">
              Wiring
            </p>
            <p className="text-[18px] font-Nunito font-light text-center text-black">
              Wiring services include a variety of tasks related to the
              installation and repairs
            </p>
          </div>
          <div className="-mt-[53px]">
            <img src={Design} alt="" />
          </div>
          <p className=" text-[90px] font-bold text-center text-customGreen-para">
            01
          </p>
        </div>
        <div className="">
        <p className=" text-[90px] font-bold text-center text-customGreen-para">
            02
          </p>
          <div className="">
            <img src={Design2} alt="" className="mx-auto"/>
          </div>
          <div className="bg-white p-8 -mt-[54px]">
            <p className="text-[24px] font-Nunito font-bold text-center text-customGreen-para">
            Repairing
            </p>
            <p className="text-[18px] font-Nunito font-light text-center text-black">
            Repairing electrical systems involves diagnosing and fixing issues like faulty wiring
            </p>
          </div>
          
         
        </div>
        <div className="">
          <div className="bg-white p-8 ">
            <p className="text-[24px] font-Nunito font-bold text-center text-customGreen-para">
            Services Calls
            </p>
            <p className="text-[18px] font-Nunito font-light text-center text-black">
            Service calls for electrical work involve scheduling a licensed electrician to diagnose and address
            </p>
          </div>
          <div className="-mt-[53px]">
            <img src={Design3} alt="" />
          </div>
          <p className=" text-[90px] font-bold text-center text-customGreen-para">
            03
          </p>
        </div>
        <div className="">
        <p className=" text-[90px] font-bold text-center text-customGreen-para">
            04
          </p>
          <div className="">
            <img src={Design4} alt="" className="mx-auto"/>
          </div>
          <div className="bg-white p-8 -mt-[54px]">
            <p className="text-[24px] font-Nunito font-bold text-center text-customGreen-para">
            Repairing
            </p>
            <p className="text-[18px] font-Nunito font-light text-center text-black">
            Repairing electrical systems involves diagnosing and fixing issues like faulty wiring
            </p>
          </div>
          
         
        </div>
      </div>
    </>
  );
}

export default NewStyle;
