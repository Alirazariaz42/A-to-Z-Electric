import { useEffect } from "react";
import Hero from "../components/hero";
import SeconSection from "../components/seconSection";
import MainService from "../components/mainService";
import ThreeImg from "../components/threeImg";
import Faq from "../components/faq";
import ContactComp from "../components/contactComp";
import Banner from "../components/banner";

function Landing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero />   
      <SeconSection/>
      <MainService/>
      <Banner/>
      <ThreeImg/>
      <Faq/>
      <ContactComp/>
      
    </>
  );
}

export default Landing;
