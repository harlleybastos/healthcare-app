import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex w-full justify-between items-center flex-col lg:flex-row"
    >
      <div className="flex flex-col justify-center items-start w-2/4">
        <h1 className="uppercase text-gray-400 text-2xl">
          Stay strong, live long
        </h1>
        <p className="mt-5 font-bold ont-[800] text-3xl">
          Take care of your body and it will take care of you.
        </p>
        <p className="mt-5  text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex at,
          beatae assumenda, molestiae praesentium cupiditate, voluptatum
          distinctio asperiores officia aspernatur error! Facere illum dolore,
          repudiandae nobis corrupti nihil blanditiis omnis.
        </p>
        <div className="flex items-center justify-between w-full">
          <button className="h-[50px] w-[150px] bg-[#3886fb] rounded-3xl text-white shadow-md mt-5">
           {`Let's Talk`}
          </button>{" "}
          <button className="h-[50px] w-[150px] bg-white border-2 border-[#3886fb] rounded-3xl text-[#3886fb] shadow-md mt-5">
            View Profile
          </button>{" "}
        </div>
      </div>
      <div className="w-3/6 lg:w-full lg:ml-10">
        <Image
          width={1280}
          height={720}
          alt="Nurse"
          src="/img/waves-nurse.png"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Hero;
