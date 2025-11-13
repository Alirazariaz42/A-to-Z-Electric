import Cards from "../components/cards";
import ContactComp from "../components/contactComp";
import ControlBg from "../components/controlBg";
import NewStyle from "../components/newStyle";
import ServComp from "../components/servComp";
import Sliderr from "../components/sliderr";
import Banner from "../components/banner";
import { useEffect } from "react";

function Control() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ControlBg />
      <ServComp />
      <NewStyle />
      <Banner/>
      <Cards/>
      <Sliderr />
      <ContactComp />
    </>
  );
}

export default Control;
