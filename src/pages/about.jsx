import { useEffect } from "react";
import AboutSecond from "../components/aboutSecond";
import ContactComp from "../components/contactComp";
import Meet from "../components/meet";
import Specialties from "../components/specialties";
import AboutBg from "../components/aboutBg";
import NewAbout from "../components/newAbout";
import Banner from "../components/banner";
// import Practise from "../components/practise";


function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    <AboutBg/>
    {/* <Practise/> */}
   <AboutSecond/>
   <NewAbout/>
   <Meet/>
   <Banner/>
   <Specialties/>
   <ContactComp/>

    
    </>
  )
}

export default About