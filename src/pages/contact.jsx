import { useEffect, useState } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFileName(e.target.files[0]);
  };

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
    formData.append("attachment", selectedFileName);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    try {
      const response = await fetch(
        "http://localhost/backEnd-Quickbid-ContactUs/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setContact("");
        setFileLink("");
        setRequirements("");
        setAttachment("");
        setSelectedFileName("");
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
      <div className="pt-[74px]">
        <div
          className=" max-w-full h-auto bg-cover bg-center lg:p-[130px] p-16"
          style={{ backgroundImage: `url(${"/png/aboutbg.png"})` }}
        >
          <h1 className="text-[36px] font-bold text-center text-white">
            Contact Us
          </h1>
        </div>

        {/* .................................. */}

        <h2 className="text-white text-[40px] text-center font-Nunito font-extrabold mt-8 leading-10">
          Send <span className="text-customGreen-para">Us A</span> Message
        </h2>

        <p className="text-[16px] font-Nunito text-white text-center lg:w-[40%] w-[80%] mx-auto mt-2">
          Feel free to contact us and we will get back to you as soon as
          possible. Fill this form or contact us directly.
        </p>

        <div className="textt-gradient p-8 lg:w-[70%] xl:w-[40%] w-full mt-6 mx-auto rounded-xl">
          <div className="flex justify-start gap-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              className="w-full p-2 rounded-full  pl-5"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 rounded-full pl-5"
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={Emailchangefunction}
            className="w-full p-2 rounded-full mt-5 pl-5"
          />
          <p className="mt-6 text-white font-Roboto text-[20px]">Upload File</p>
          <div className="mt-3">
            <input
              onChange={handleFileChange}
              type="file"
              className="border w-full"
            />
          </div>

          <textarea
            rows="6"
            cols="10"
            placeholder="Write Your Message..."
            className="mt-5  rounded-3xl w-full resize-none pl-5 pt-5"
          />

          <div className="flex justify-center items-center mt-6">
            <button disabled={disableButton} onClick={onFormSubmit}>
              Submit Now
            </button>
          </div>
        </div>

        <h2 className="text-white text-[40px] text-center font-Nunito font-extrabold mt-8 leading-10">
          Location
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto mt-8">
          <div className="self-center">
            <p className="text-white text-[25px] font-Nunito font-bold ">
              We would love to hear from you...
            </p>
            <p className="text-white text-[20px] font-Nunito font-medium mt-2">
              Feel free to contact us and we will get back to you as soon as
              possible. Fill this form or contact us directly.
            </p>
          </div>
          <div className="responsive-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8340663165022!2d74.46713657469435!3d31.473750449445472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909ee3c201bc1%3A0xfb808240a70c5b5f!2sPearson%20Specter%20Litt!5e0!3m2!1sen!2s!4v1721914095251!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
