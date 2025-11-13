import Teen from "../../public/png/teen.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ThreeImg() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="grid  grid-cols-1 container mx-auto mt-8">

      <div className="lg:col-span-1 md:col-span-2 columns-1 mx-auto self-center">
          {/* <img src={Teen} alt="" className="mx-auto" data-aos="zoom-in" /> */}
          <div className="loader ">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-white font-Nunito text-[22px] font-medium ">
            Why Choose{" "}
            <span className="text-customGreen-para">
              A To Z electric for Your
            </span>{" "}
            Electrical needs
          </h4>
          <p className="text-customGreen-para font-bold text-[18px]  mt-2">
            Affordable Rates
          </p>
          <p className="text-white font-light text-[18px] ">
            We offer great prices, making sure you get quality electrical
            services without spending too much. We tailor our services to fit
            your budget.
          </p>
          <p className="text-customGreen-para font-bold text-[18px]  mt-2">
            Experienced Professionals
          </p>
          <p className="text-white font-light text-[18px] ">
            Our team of skilled electricians has many years of experience. We
            handle all types of projects with top-notch professionalism and
            skill.
          </p>
          <p className="text-customGreen-para font-bold text-[18px]  mt-2">
            Innovative Solutions
          </p>
          <p className="text-white font-light text-[18px] ">
            We use the latest technology and methods in the electrical industry.
            We bring new and efficient solutions to your electrical problems,
            making sure you get the best results.
          </p>
          <p className="text-customGreen-para font-bold text-[18px]  mt-2">
            Safety and Compliance
          </p>
          <p className="text-white font-light text-[18px] ">
            Your safety is our top priority. We follow all safety rules and
            regulations to make sure every job is done safely and correctly.
          </p>
        </div>
       
      </div>
    </>
  );
}

export default ThreeImg;
