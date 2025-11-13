import Slider from "react-slick";
import Img from "../../public/png/img.png";
import David from "../../public/png/david.png";
import Jenifer from "../../public/png/jennifer.png";
import Jesica from "../../public/png/jesica.png";
import Daniel from "../../public/png/daniel.png";
import Michael from "../../public/png/michael.png";
import YellowStar from "../../public/svg/greenStar.svg";
import GrayStar from "../../public/svg/whiteStar.svg";

function Sliderr() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
  return (
    <>
      <div className="slider-container text-gradient mt-8">
        <h2 className="text-[28px] text-white font-roboto font-bold text-center pt-[30px]">
          What Our <span className="text-[#47d88d] font-bold">Customers</span>{" "}
          have to say
        </h2>
        <div className="p-8 lg:w-[80%] w-full mx-auto">
          <Slider {...settings}>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Fantastic experience with {""}
                  <span className="text-customGreen-light">
                    A to Z Electric
                  </span>{" "}
                .Their plumbing team, led by John, was professional, prompt,
                  and resolved our plumbing issues with ease. Highly recommend
                  their services!
                </p>
                <div className="flex justify-start gap-3 mt-8">
                  <div>
                    <img src={Img} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Sarah Thompson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={GrayStar}
                        alt=""
                        className="w-[21px] h-[21px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Outstanding service from {""}
                  <span className="text-customGreen-light">
                  A to Z Electric
                  </span>{" "}
                  Their demolition crew, led by Mark, demolished our old
                  structure efficiently and safely. Their attention to detail
                  and professionalism were commendable. Highly satisfied with
                  their work!
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={David} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      David Johnson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Exceptional service from{" "}
                  <span className="text-customGreen-light">
                  A to Z Electric
                  </span>{" "}
                  .Their demolition team, led by Alex, demolished our old
                  structure efficiently and with great attention to detail.
                  Highly recommend their services for any demolition project!
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Michael} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Michael Brown
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={GrayStar}
                        alt=""
                        className="w-[21px] h-[21px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Great job by{" "}
                  <span className="text-customGreen-light">
                  A to Z Electric
                  </span>
                  .Their team, led by Emily, fixed a major leak in our home
                  promptly and professionally. Highly recommend their services!
                </p>
                <div className="flex justify-start gap-3 mt-2">
                  <div>
                    <img src={Jenifer} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Jennifer Taylor
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Top-notch job by
                  <span className="text-customGreen-light">
                  A to Z Electric
                  </span>{" "}
                  .Led by Alex, their team executed our project with precision.
                  Highly recommended!
                </p>
                <div className="flex justify-start gap-3 mt-8">
                  <div>
                    <img src={Jesica} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Jessica Wilson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={GrayStar}
                        alt=""
                        className="w-[21px] h-[21px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="bg-white rounded-xl p-6 lg:h-[300px] h-auto">
                <p className="text-[20px] font-roboto font-normal">
                  Exceptional service from {""}
                  <span className="text-customGreen-light">
                  A to Z Electric
                  </span>{" "}
                  .Under Emily's leadership, they promptly resolved a major
                  leak. Very impressed with their professionalism!
                </p>
                <div className="flex justify-start gap-3 mt-[36px]">
                  <div>
                    <img src={Daniel} alt="" className="w-[70px] h-[70px]" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-roboto font-bold mt-3">
                      Daniel Thompson
                    </h4>
                    <div className="flex justify-start ">
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                      <img
                        src={YellowStar}
                        alt=""
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sliderr;
