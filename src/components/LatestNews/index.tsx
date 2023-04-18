import Image from "next/image";
import React from "react";

const LatestNews = () => {
  return (
    <section id="latest" className="flex w-full flex-col justify-center my-20">
      <div className="flex justify-center items-center my-5">
        <h1 className="text-3xl font-bold">{`Let's see Our latest news`}</h1>
      </div>
      <div className="flex flex-col mx-10 lg:flex-row justify-start items-start">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="shadow-lg rounded-md">
            <Image
              src="/img/covid.jpg"
              width={768}
              height={300}
              alt="Happy nurse"
              className="rounded-lg w-full"
            />
            <div className="flex justify-between items-center px-10 w-full my-10 ">
              <p className="font-bold">Marya Caizoni</p>
              <p>04/17/2023</p>
            </div>
            <div className="flex w-full flex-col px-10 py-10">
              <h1 className="text-3xl font-bold my-5">Lorem ipsum dolor !</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis labore itaque ea, necessitatibus officiis dolorum
                laboriosam. Beatae minima dignissimos aliquam impedit omnis,
                dolorem repellat dolore tempore esse eos aspernatur eaque.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4  lg:ml-10 my-10 lg:my-0 w-full lg:w-auto">
          <div className="w-full flex items-center justify-start">
            <h1 className="font-bold">Latest News:</h1>
          </div>
          <div className="w-full h-full flex items-center justify-center  rounded-lg shadow-md text-center">
            <Image
              src="/img/covid.jpg"
              width={300}
              height={300}
              alt="Happy nurse"
              className="rounded-lg w-2/4 h-full bg-red-300"
            />
            <div className="flex justify-between flex-col items-center w-full">
              <p className="font-bold">Post 01</p>
              <button type="button" className="text-orange-400 text-sm">
                Read more {`>`}
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-2 rounded-lg shadow-lg text-center">
            <Image
              src="/img/covid.jpg"
              width={250}
              height={250}
              alt="Happy nurse"
              className="rounded-lg w-6/12"
            />
            <div className="flex justify-between flex-col items-center w-full">
              <p className="font-bold">Post 02</p>
              <button type="button" className="text-orange-400 text-sm">
                Read more {`>`}
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-2 rounded-lg shadow-lg text-center">
            <Image
              src="/img/covid.jpg"
              width={250}
              height={250}
              alt="Happy nurse"
              className="rounded-lg w-6/12"
            />
            <div className="flex justify-between flex-col items-center w-full">
              <p className="font-bold">Post 03</p>
              <button type="button" className="text-orange-400 text-sm">
                Read more {`>`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
