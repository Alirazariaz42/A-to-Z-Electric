import { useState } from "react";
import White from "../../public/png/white.png";
import Yellow from "../../public/png/yellow.png";

function Practise() {
  const [isBulb, setIsBulb] = useState(true);

  const handleChange = () => {
    setIsBulb(false);
  };
  const handleChangeTwo = () => {
    setIsBulb(true);
  };

  return (
    <>
      {isBulb ? (
        <img src={White} alt="" className="w-[300px] h-[300px] mx-auto" />
      ) : (
        <img src={Yellow} alt="" className="w-[300px] h-[300px] mx-auto" />
      )}

      <div className="w-[20%] mx-auto flex gap-2">  
        <button onClick={handleChange}>Turn On</button>
        <button onClick={handleChangeTwo}>Turn Off</button>
      </div>
    </>
  );
}

export default Practise;
