import ContactComp from "../components/contactComp"
import Firebg from "../components/firebg"
import ServComp from "../components/servComp"
import Sliderr from "../components/sliderr"
import Banner from "../components/banner"
import BgFire from "../components/bgFire"
import CardFire from "../components/cardFire"
import { useEffect } from "react"


function Fire() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    
    <Firebg/>
    <ServComp/>
    <Banner/>
    <BgFire/>
    <CardFire/>
    <Sliderr/>
    <ContactComp/>
    
    
    </>
  )
}

export default Fire