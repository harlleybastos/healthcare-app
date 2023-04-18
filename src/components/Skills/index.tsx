import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section id="work" className="flex w-full flex-col justify-center items-center my-14">
      <div className="flex flex-col gap-3 items-center justify-center w-2/4">
        <h1 className="text-3xl font-bold">My Skill depends on work.</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam fuga
          sit quis porro sed! Amet est quibusdam voluptate ipsam esse? Animi
          reiciendis quia voluptates dicta, architecto error pariatur
          consequatur fugit?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center w-5/6 mt-5">
        <div className="bg-[#FDE7E1] h-[300px] rounded-lg shadow-lg w-5/6 flex flex-col justify-center items-center my-10">
          <div className="bg-[#F25A3C] rounded-full p-5 mt-10">
            <Image width={50} height={30} alt="Nurse" src="/img/security.png" />
          </div>
          <div className="w-full justify-center items-center text-center p-8">
            <h1 className="mb-2 text-lg font-bold">Patient safety</h1>
            <p className="my-8 w-full text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-[#F9EEE3] h-[300px] rounded-lg shadow-lg w-5/6 flex flex-col justify-center items-center my-10">
          <div className="bg-[#CC7926] rounded-full p-5 mt-10">
            <Image
              width={50}
              height={30}
              alt="Nurse"
              src="/img/heart-care.png"
            />
          </div>
          <div className="w-full justify-center items-center text-center p-8">
            <h1 className="mb-2 text-lg font-bold">Patient safety</h1>
            <p className="my-8 w-full text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-[#EFF3E8] h-[300px] rounded-lg shadow-lg w-5/6 flex flex-col justify-center items-center my-10">
          <div className="bg-[#769D29] rounded-full p-5 mt-10">
            <Image width={50} height={30} alt="Nurse" src="/img/24-hours.png" />
          </div>
          <div className="w-full justify-center items-center text-center p-8">
            <h1 className="mb-2 text-lg font-bold">Patient safety</h1>
            <p className="my-8 w-full text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="bg-[#E9F8F6] h-[300px] rounded-lg shadow-lg w-5/6 flex flex-col justify-center items-center my-10">
          <div className="bg-[#25B89F] rounded-full p-5 mt-10">
            <Image
              width={50}
              height={30}
              alt="Nurse"
              src="/img/technical-support.png"
            />
          </div>
          <div className="w-full justify-center items-center text-center p-8">
            <h1 className="mb-2 text-lg font-bold">Patient safety</h1>
            <p className="my-8 w-full text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
