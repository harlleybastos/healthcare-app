import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex w-full flex-col justify-center gap-10 my-20 lg:mx-auto"
    >
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center w-full">
        <Image
          src="/img/nurse-helping-child.jpg"
          width={1280}
          height={720}
          alt="Happy nurse"
          className="w-4/5 my-10 lg:my-auto lg:w-3/6 rounded-lg"
        />
        <div className="flex flex-col items-start justify-start mx-10">
          <div>
            <h1 className="uppercase text-lg font-bold text-gray-600">
              About me
            </h1>
            <p className="text-3xl my-1">{`I'm Dr. Kierra Calzoni.`}</p>
            <p className="text-4xl font-bold">
              Actually, I love to care Patient.
            </p>
          </div>
          <div className="mt-2">
            <h1 className="text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facere, similique temporibus molestiae quis, perferendis corrupti
              recusandae culpa, ipsum veritatis nostrum delectus voluptatem
              incidunt rem tempora dolorum a excepturi quo.
            </h1>
          </div>
          <div className="w-full mt-4">
            <button
              type="button"
              className="w-2/6 h-[40px] text-white rounded-full bg-[#3886fb]"
            >
              {`Let's Talk`}
            </button>
          </div>
        </div>
        <Image
          src="/img/nurse-helping-child.jpg"
          width={1280}
          height={720}
          alt="Happy nurse"
          className="w-4/5 my-10 lg:my-auto lg:hidden rounded-lg"
        />
        <div className="lg:hidden flex flex-col items-start justify-start mx-10">
          <div>
            <h1 className="uppercase text-lg font-bold text-gray-600">
              About me
            </h1>
            <p className="text-3xl my-1">{`I'm Dr. Kierra Calzoni.`}</p>
            <p className="text-4xl font-bold">
              Actually, I love to care Patient.
            </p>
          </div>
          <div className="mt-2">
            <h1 className="text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facere, similique temporibus molestiae quis, perferendis corrupti
              recusandae culpa, ipsum veritatis nostrum delectus voluptatem
              incidunt rem tempora dolorum a excepturi quo.
            </h1>
          </div>
          <div className="w-full mt-4">
            <button
              type="button"
              className="w-2/6 h-[40px] text-white rounded-full bg-[#3886fb]"
            >
              {`Let's Talk`}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center lg:flex-row justify-start lg:items-start w-full my-10 mx-10 lg:mx-0 w-full">
        <div className="flex flex-col items-start justify-start">
          <div>
            <h1 className="uppercase text-lg font-bold text-gray-600">
              About me
            </h1>
            <p className="text-3xl my-1">{`I'm Dr. Kierra Calzoni.`}</p>
            <p className="text-4xl font-bold">
              Actually, I love to care Patient.
            </p>
          </div>
          <div className="mt-2">
            <h1 className="text-md ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              facere, similique temporibus molestiae quis, perferendis corrupti
              recusandae culpa, ipsum veritatis nostrum delectus voluptatem
              incidunt rem tempora dolorum a excepturi quo.
            </h1>
          </div>
          <div className="w-full my-4">
            <button
              type="button"
              className="w-2/6 h-[40px] text-white rounded-full bg-[#3886fb]"
            >
              {`Let's Talk`}
            </button>
          </div>
        </div>
        <Image
          src="/img/nurse-helping-child-02.jpg"
          width={1280}
          height={720}
          alt="Happy nurse"
          className="w-4/5 my-10 lg:my-auto lg:w-3/6 rounded-lg"
        />
      </div>
      <div className="mt-10 flex justify-center items-center w-full">
        <h1 className="text-3xl font-bold">
          {`Let's`} see what patient says !
        </h1>
      </div>
    </section>
  );
};

export default About;
