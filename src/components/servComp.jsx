import { useState } from "react";
import Serv1 from "../../public/png/serv1.png";
import Serv2 from "../../public/png/serv2.png";
import Serv3 from "../../public/png/serv3.png";
import Serv4 from "../../public/png/serv4.png";
import White1 from "../../public/png/white1.png";
import White2 from "../../public/png/white2.png";
import White3 from "../../public/png/white3.png";
import White4 from "../../public/png/white4.png";

function ServComp() {
  const [change, setChange] = useState(false);
  const [change1, setChange1] = useState(false);
  const [change2, setChange2] = useState(false);
  const [change3, setChange3] = useState(false);

  const handleChange = () => {
    setChange(true);
  };

  const handleReverse = () => {
    setChange(false);
  };
  const handleChange1 = () => {
    setChange1(true);
  };

  const handleReverse1 = () => {
    setChange1(false);
  };
  const handleChange2 = () => {
    setChange2(true);
  };

  const handleReverse2 = () => {
    setChange2(false);
  };
  const handleChange3 = () => {
    setChange3(true);
  };

  const handleReverse3 = () => {
    setChange3(false);
  };

  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center p-6 mt-8"
        style={{ backgroundImage: `url(${"/png/Section.png"})` }}
      >
        <h3 className="text-[36px] font-bold text-center text-white">
          Primary{" "}
          <span className="text-customGreen-para">Electrical Solutions</span>
        </h3>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 container mx-auto mt-8">
          <div onMouseEnter={handleChange} onMouseLeave={handleReverse}>
            <img src={change ? White1 : Serv1} alt="" className="mx-auto" />
          </div>
          <div onMouseEnter={handleChange1} onMouseLeave={handleReverse1}>
            <img src={change1 ? White2 : Serv2} alt="" className="mx-auto" />
          </div>
          <div onMouseEnter={handleChange2} onMouseLeave={handleReverse2}>
            <img src={change2 ? White3 : Serv3} alt="" className="mx-auto" />
          </div>
          <div onMouseEnter={handleChange3} onMouseLeave={handleReverse3}>
            <img src={change3 ? White4 : Serv4} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServComp;
