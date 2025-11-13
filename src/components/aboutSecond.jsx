import Heroo from "../../public/png/aboutOne.png";
import Tabs from "./tabs";

function AboutSecond() {
  return (
    <>
    
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-3 container mx-auto">
          <div className="col-span-2 mx-auto">
            <p className="text-customGreen-para font-Nunito text-[18px] font-bold">
              About Our Company
            </p>
            <h1 className="text-[46px] font-Nunito font-extrabold leading-10 bg-gradient-to-l from-customGreen-para to-customGreen-light text-transparent bg-clip-text">
              Empowering Your Electrical Needs
            </h1>

            <p className="text-white font-Nunito text-[18px] font-light mt-2">
              At{" "}
              <span className="text-customGreen-para font-medium">
                A to Z Electric
              </span>
              , we are your premier destination for comprehensive electrical
              solutions. As a trusted name in the industry, we specialize in
              providing expert residential, industrial, and commercial
              electrical services.
            </p>

            <Tabs />
          </div>
          <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
            <img
              src={Heroo}
              alt=""
              className=" "
            //   data-aos="zoom-in"
            />
          </div>
        </div>
      
    </>
  );
}

export default AboutSecond;
