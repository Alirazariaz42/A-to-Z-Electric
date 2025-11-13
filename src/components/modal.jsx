import { useState } from "react";

function Modal({ closeModal }) {
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
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 h-[1200px] z-[9999] pt-[200px]">
        <div className="absolute lg:w-[50%]  w-[90%]  h-full  ">
          <div className="z-50 border p-4 rounded-lg shadow-md relative">
            <div
              onClick={closeModal}
              className="absolute top-[11px] left-0 text-white font-bold px-3 "
            >
              <div className="hover:bg-customGreen-para p-1 cursor-pointer w-[30px] h-[30px] rounded-full mx-auto flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=""
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              </div>
            </div>
            <div className="text-gradient-two rounded-md p-6 mt-3">
              <h2 className="text-lg font-bold mb-10 text-white">Upload</h2>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                  <div className="col-span-1">
                    <div className="border-b border-gray-300">
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full border-none bg-transparent text-white border-b border-white outline-none"
                        placeholder="Name"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="contact"
                        type="number"
                        value={Contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="block w-full border-none mt-12 bg-transparent text-white border-b border-white outline-none"
                        placeholder="Contact number"
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        id="message"
                        type="text"
                        value={Requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        className="block w-full border-none mt-12 bg-transparent text-white border-b border-white outline-none"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="border-b border-gray-300 ">
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={Emailchangefunction}
                        className="block w-full bg-transparent text-white outline-none"
                        placeholder="Email"
                      />
                    </div>

                    <div className="border-b border-gray-300 bg-black">
                      <input
                        id="file-upload"
                        type="file"
                        className="block w-full border-none border-gray-300 outline text-white bg-transparent mt-[43px] "
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="border-b border-gray-300">
                      <input
                        type="text"
                        className="block w-full bg-transparent mt-12 text-white outline-none"
                        placeholder="File link (optional)"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className=" w-[150px] h-[50px] text-[18px] cursor-pointer rounded-3xl font-bold mx-auto bg-[#467942] hover:shadow-3xl hover:bg-[#5b9e57] text-white flex justify-center items-center mt-12"> */}
                  <div className="flex justify-center items-center mt-4">
                  <button
                    disabled={disableButton}
                    onClick={onFormSubmit}
                    className=""
                  >
                    Submit
                  </button>
                  </div>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
