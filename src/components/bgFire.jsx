function BgFire() {
  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center class0-s mt-8 "
        style={{ backgroundImage: `url(${"/png/firebg.png"})` }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto">
          <div>
            <p className="text-customGreen-para text-[38px] font-Nunito font-extrabold mt-6">
              Commerical
            </p>
            <p className="text-white text-[18px] font-Nunito font-normal mt-6">
              Fire safety involves implementing preventive measures to reduce
              fire risks, such as installing smoke detectors, fire alarms, and
              sprinkler systems. Regular maintenance and inspections ensure
              these systems function correctly.
            </p>

            <button className="mt-16 mb-3">Get Service</button>
          </div>
          <div className="text-right">
            <p className="bg-gradient-to-l from-customGreen-para to-[#06e773] text-transparent bg-clip-text text-[38px] font-Nunito font-extrabold mt-6">
              Residential
            </p>
            <p className="text-white text-[18px] font-Nunito font-normal mt-6">
            Residential fire safety services include installing and maintaining smoke detectors, fire alarms, and fire extinguishers, as well as conducting electrical inspections to prevent fire risks.
            </p>

            <button className="mt-16 mb-3">Get Service</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgFire;
