import Serv from "../../public/png/groupp.png";


function MeterBg() {
  return (
    <>
      <div className="pt-[74px]">
        <div
          className=" max-w-full h-auto bg-cover bg-center lg:p-[100px] p-16"
          style={{ backgroundImage: `url(${"/png/meterr.png"})` }}
        >
          <h1 className="text-[36px] font-bold text-center text-white">
            Meter Installation
          </h1>
          <p className="text-center text-white text-[18px] lg:w-[80%] w-full mx-auto">
            Ensure the meter is securely mounted and level. Connect the wiring
            according to the manufacturer's instructions, double-checking all
            connections. Test the installation for accuracy and proper
            functionality before finalizing.
          </p>
        </div>
        <h3 className="text-[23px] font-Nunito text-white font-bold leading-[50px] text-center mt-6">
          Control{" "}
          <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
            System and Maintenance
          </span>
        </h3>

        <div className="grid lg:grid-cols-2 grid-cols-1 w-full container mx-auto mt-8">
          <div className="col-span-1">
            <h3 className="text-[50px] font-Nunito text-white font-bold leading-[50px]">
           Complete {" "}
              <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
              Meter Installation Service
              </span>
            </h3>

            <p className="text-white font-Nunito text-[20px] font-light mt-3">
              <span className="text-customGreen-para font-medium">
              A to Z Electric
              </span>{" "}
               offers a wide range of electrical maintenance and repair services to keep your systems efficient and reliable.Securely mount the meter, ensuring it is level. Connect the wiring following the manufacturer's instructions, and double-check all connections. Test the meter for accuracy and proper functionality before finalizing. 
            </p>
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
            <img
              src={Serv}
              alt=""
              className=" lg:float-right block mx-auto"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeterBg;
