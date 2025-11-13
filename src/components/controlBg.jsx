import Serv from "../../public/png/elecpic.png";

function ControlBg() {
  return (
    <>
      <div className="pt-[74px]">
        <div
          className=" max-w-full h-auto bg-cover bg-center lg:p-[100px] p-16"
          style={{ backgroundImage: `url(${"/png/controlbg.png"})` }}
        >
          <h1 className="text-[36px] font-bold text-center text-white">
            Control System
          </h1>
          <p className="text-[18px] font-light text-center text-white lg:w-[80%] w-full mx-auto">
            {" "}
            Control systems are used to achieve a desired output by controlling
            the inputs and processes. They are essential in industrial
            automation, machinery, vehicles, and various other applications.
          </p>
        </div>
        {/* ................... */}
        <h3 className="text-[23px] font-Nunito text-white font-bold leading-[50px] text-center mt-6">
          Control{" "}
          <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
            System and Maintenance
          </span>
        </h3>

        <div className="grid lg:grid-cols-2 grid-cols-1 w-full container mx-auto mt-8">
          <div className="col-span-1">
            <h3 className="text-[50px] font-Nunito text-white font-bold leading-[50px]">
              Control{" "}
              <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
                System Service and Maintenance
              </span>
            </h3>

            <p className="text-white font-Nunito text-[20px] font-light mt-3">
              <span className="text-customGreen-para font-medium">
                Control systems
              </span>{" "}
              require regular maintenance to ensure their continued performance
              and reliability. The maintenance process involves several key
              steps. First, implement a preventive maintenance strategy, which
              includes scheduled inspections and updates regardless of the
              system's current state.
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

export default ControlBg;
