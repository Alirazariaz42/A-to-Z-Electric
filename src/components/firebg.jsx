import Serv from "../../public/png/firee.png";

function Firebg() {
  return (
    <>
      <div className="pt-[74px]">
        <div
          className=" max-w-full h-auto bg-cover bg-center lg:p-[100px] p-16"
          style={{ backgroundImage: `url(${"/png/controlbg.png"})` }}
        >
          <h1 className="text-[36px] font-bold text-center text-white">
            Fire Safety
          </h1>
          <p className="text-[18px] font-light text-center text-white lg:w-[80%] w-full mx-auto">
            {" "}
            Fire safety involves implementing preventive measures to reduce fire
            risks, such as installing smoke detectors, fire alarms, and
            sprinkler systems. Regular maintenance and inspections ensure these
            systems function correctly.
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

        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
            <img
              src={Serv}
              alt=""
              className=" lg:float-right block mx-auto"
              data-aos="zoom-in"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-[50px] font-Nunito text-white font-bold leading-[50px]">
            Fire{" "}
              <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
               Safety Service 
              </span>
            </h3>

            <p className="text-white font-Nunito text-[20px] font-light mt-3">
              <span className="text-customGreen-para font-medium">
              Fire safety services
              </span>{" "}
               provide a range of solutions including the installation and maintenance of fire alarms, sprinkler systems, and extinguishers. They also offer fire risk assessments, emergency evacuation planning, and staff training on fire safety procedures. These services help ensure compliance with safety regulations and enhance overall fire protection
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Firebg;
