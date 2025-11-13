import Serv from "../../public/png/serv.png";

function ServiceBg() {
  return (
    <>
      <div className="pt-[74px]">
        <div
          className=" max-w-full h-auto bg-cover bg-center lg:p-[130px] p-8"
          style={{ backgroundImage: `url(${"/png/aboutbg.png"})` }}
        >
          <h1 className="text-[36px] font-bold text-center text-white">
            Electrical Work
          </h1>
          <p className="text-center text-white text-[18px] lg:w-[80%] w-full mx-auto">
            Premier electrical solutions for all environments: residential,
            commercial, and industrial. From essential services to comprehensive
            repairs and installations, we've got every aspect covered.
          </p>
        </div>

        <h2 className="text-white text-[30px] text-center font-Nunito font-extrabold mt-8 leading-10">
          General{" "}
          <span className="text-customGreen-para">
            Electrical Repairs and Maintenance
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 w-full container mx-auto mt-8">
          <div className="col-span-1">
            <h1 className="text-[50px] font-Nunito text-white font-bold leading-[50px]">
              Complete{" "}
              <span className="font-extrabold bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
                Electrical Service
                 and Maintenance
              </span>
            </h1>

            <p className="text-white font-Nunito text-[20px] font-light mt-3">
              <span className="text-customGreen-para font-medium">A to Z Electric</span> offers a wide range of electrical maintenance and
              repair services to keep your systems efficient and reliable. From
              main electrical service to wiring, repairs, service calls, and
              complete new installations, our expert team handles all your
              electrical needs with precision and professionalism, both for
              residential and commercial properties.
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

export default ServiceBg;
