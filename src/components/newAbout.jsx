import Four from "../../public/png/threeimg.png";
import Bullet from "../../public/png/bullet.png";

function NewAbout() {
  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center mt-8 p-8"
        style={{ backgroundImage: `url(${"/png/Section.png"})` }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto">
          <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto self-center">
            <img src={Four} alt="" />
          </div>
          <div className="col-span-2">
            <p className="text-[34px] font-Nunito font-bold text-white">
              What We Do!
            </p>
            <p className="text-[18px] font-Nunito font-light text-white mt-2">
              At A to Z Electric, we provide a comprehensive range of electrical
              services to meet your residential, commercial, and industrial
              needs. Our team is dedicated to delivering efficient, safe, and
              high-quality solutions.
            </p>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Residential Services: Wiring, installations, repairs, and
                upgrades.
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Commercial Services: Lighting, power distribution, and
                maintenance.
              </p>
            </div>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Industrial Services: Complex electrical systems management.
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Fire Safety Systems: Installation and maintenance.
              </p>
            </div>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Meter Installation: Accurate and efficient setups.
              </p>
            </div>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
                Control Systems: Advanced design and implementation.
              </p>
            </div>

            <p className="text-[34px] font-Nunito font-bold text-white mt-4">
            What You Can Do in!
            </p>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
              Certified & Awards winner
              </p>
            </div>

            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
              Work with energetic team
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
              Just Because You Work Hard You’ll Be Successful.
              </p>
            </div>
            <div className="flex justify-start gap-2 mt-3">
              <img src={Bullet} alt="" className="w-[14px] h-[12px] mt-[7px]" />
              <p className="text-[18px] font-Nunito font-medium text-white">
              For all your Electrical needs!
              </p>
            </div>





          </div>
        </div>
      </div>
    </>
  );
}

export default NewAbout;
