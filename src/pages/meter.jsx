import MeterBg from "../components/meterBg";
import Banner from "../components/banner";
import Sliderr from "../components/sliderr";
import ContactComp from "../components/contactComp";
import ServComp from "../components/servComp";
import MeterCard from "../components/meterCard";
import Lasty from "../components/lasty";
import { useEffect } from "react";

function Meter() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <MeterBg />
      <ServComp />
      <Banner />
      <MeterCard />
      <Lasty/>
      <Sliderr />
      <ContactComp />
    </>
  );
}

export default Meter;
