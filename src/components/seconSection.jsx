import Man from "../../public/png/man.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SeconSection() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        className=" w-full h-auto bg-cover bg-center mt-8 p-3"
        style={{ backgroundImage: `url(${"/png/bgOne.png"})` }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 container mx-auto">
          <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto" data-aos="fade-right">
            <img src={Man} alt="" className=""/>
          </div>
          <div className="col-span-2 self-center lg:mt-8 mt-0" data-aos="fade-left">
            <p className="text-customGreen-para font-Nunito text-[16px] font-bold">
              About A to Z Electric
            </p>
            <h2 className="text-[24px] font-Nunito text-white font-bold leading-8">
              Who <span className="text-customGreen-para">We Are?</span>
            </h2>

            <p className="text-white font-Nunito text-[18px] font-light mt-2">
              At <span className="text-customGreen-para font-medium">A to Z Electric</span>, we provide a range of electrical services to
              meet your needs. Our skilled team handles Electrical Work with
              care and precision. We ensure safety with our advanced Fire Safety
              solutions. Our Meter Installation services are accurate and
              efficient, and our Control Systems improve functionality and
              efficiency. We offer high-quality services at competitive prices,
              delivering great value to our clients.
            </p>

            <div
            // className=" border text-customGreen-para p-3 rounded-lg w-[150px] cursor-pointer mt-4 hover:bg-customGreen-light hover:text-white flex justify-center items-center">
            >
              <button className="button mt-4 mb-8 z-10">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SeconSection;
