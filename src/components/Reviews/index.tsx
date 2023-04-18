import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <section id="reviews" className="flex w-full flex-col justify-center my-20 mx-10 lg:mx-auto">
      <Image
        src="/img/reviews.png"
        width={1280}
        height={720}
        alt="Happy nurse"
        className="w-full rounded-lg"
      />
    </section>
  );
};

export default Reviews;
