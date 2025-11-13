import { ABOUT_CARDS } from "../data";


function Specialties() {

  return (
    <>
      
        <h3 className="text-[22px] font-Roboto text-white font-semibold text-center pt-8">
          SPECIALTIES
        </h3>
        <p className="text-[22px] text-customGreen-para font-Roboto font-semibold text-center mt-2">
          Expertise That Sets Us Apart
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 container mx-auto">
          {ABOUT_CARDS.map((x) => (
            <>
              <div className="relative  class-styele  overflow-hidden mx-auto">
                <img className="w-full h-full mx-auto" src={x.img} />
                <p className="absolute text-center mx-auto  text-white text-[18px] font-Roboto font-semibold w-full class-short">
                  {x.para}
                </p>
              </div>
            </>
          ))}
        </div>
  
    </>
  );
}

export default Specialties;
