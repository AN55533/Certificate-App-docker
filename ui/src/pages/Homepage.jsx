import React, { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/images/Logo.png";

const Homepage = () => {
  const [certiId, setCertiId] = useState("");

  return (
    <div className="bg-white h-[580px] w-[1000px] mt-[120px] ml-[400px] rounded-[30px] shadow-xl shadow-gray-600">
      <div className="ml-[-250px] mt-[40px]">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ml-[650px] " >Certficate Dapp</h1>
        {/* <img src={img1} alt="" className="h-[100px]" /> */}
      </div>
      <div className=" ml-[370px] mt-[30px]">
        <img src={img2} alt="" className="h-[250px]" />
      </div>
      <div className="ml-[330px] mt-[30px]">
        <input
          type="text"
          value={certiId}
          onChange={(e) => setCertiId(e.target.value)}
          className="w-[350px] h-[40px] outline outline-slate-300 rounded-[10px]"
          placeholder="Enter Certificate ID to View"
        />
      </div>
      <div className="ml-[450px] mt-[30px]">
        <Link
          to={`/view/${certiId}`}
          className="bg-green-600 p-[15px] pl-[20px] pr-[20px] rounded-[10px] text-white"
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
