import Heroo from "../../public/png/ab1.png";

function Meet() {
  return (
    <>
      <h4 className="text-white mt-8 font-Roboto text-[24px] font-semibold text-center">
        MEET OUR EXPERT ELECTRICIANS
      </h4>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-3 container mx-auto">
        <div className="col-span-2 mx-auto">
          <p className="text-white font-Nunito text-[18px] font-light mt-2">
            At{" "}
            <span className="text-customGreen-para font-medium">
              A to Z Electric
            </span>
             , connecting with our skilled electricians
            provides invaluable insights into your electrical systems. Their
            expertise ensures swift identification and resolution of potential
            issues, guaranteeing safety and reliability for your home or
            business.<br/> Our team specializes in:
          </p>
          <li className="text-white font-Roboto font-bold text-[18px] mt-2">Electrical Work</li>
          <li className="text-white font-Roboto font-bold text-[18px] mt-1">Control System</li>
          <li className="text-white font-Roboto font-bold text-[18px] mt-1">Fire Safety</li>
          <li className="text-white font-Roboto font-bold text-[18px] mt-1">New Meter or New Service Requests</li>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
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

export default Meet;
