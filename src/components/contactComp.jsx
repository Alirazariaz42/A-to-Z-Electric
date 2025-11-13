import Contimg from "../../public/png/contimg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function ContactComp() {
  useEffect(() => {
    const initializeAos = () => {
      if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        Aos.init({ duration: 2000, disable: false });
      } else {
        Aos.init({ disable: true });
      }
    };

    initializeAos();

    const handleResize = () => {
      if (window.innerWidth > 768) {
        Aos.refreshHard(); // Re-enable AOS on larger screens
      } else {
        Aos.init({ disable: true }); // Disable AOS on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [filelink, setFileLink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch("http://localhost/backEnd-Quickbid-ContactUs/", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setContact("");
        setFileLink("");
        setRequirements("");
        setAttachment("");
        
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };


  return (
    <>
      <div
        className=" max-w-full h-auto bg-cover bg-center mt-8 p-3"
        style={{ backgroundImage: `url(${"/png/contactbg.png"})` }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 container mx-auto">
          <div className="self-center" data-aos="fade-right">
            <p className="text-[22px] font-Nunito font-bold text-white">
              Let’s Get{" "}
              <span className="text-customGreen-para font-extrabold">
                In Touch
              </span>
            </p>

            <div className="flex justify-start gap-4 mt-6">
              <input
                type="text"
                value={name}
                        onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="p-3 rounded-md bg-transparent border text-white w-[46%]"
              />
              <input
                type="text"
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Your Phone"
                className="p-3 rounded-md bg-transparent border text-white w-[46%]"
              />
            </div>
            <input
              type="text"
              value={email}
              onChange={Emailchangefunction}
              placeholder="Your Email"
              className="p-3 rounded-md bg-transparent border text-white mt-4 w-[95%]"
            />

            <textarea
              className="textarea"
              id="comments"
              placeholder="Your Message..."
              rows="5"
              cols="63"
            >
              
            </textarea>

            <button 
            // disabled={disableButton}
            onClick={onFormSubmit}
            className="mt-4">Submit</button>
          </div>

          <div className="mx-auto" data-aos="fade-left">
            <img src={Contimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComp;
