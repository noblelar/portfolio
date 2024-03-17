import Image from "next/image";
import React from "react";

import Slider1 from "../slider/slider";

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[90vh] ">
      {/* Introduction  */}
      <div className=" container m-auto ">
        <div className=" text-center py-[10vh] ">
          <div>
            <div className=" font-tegomin ">
              <Slider1 />
            </div>
            <div className=" font-mulish text-[2rem] ">
              I&apos;m <br />{" "}
              <span className=" font-bold text-[3.5rem]   ">Noble Ackor</span>
            </div>
            <div className=" font-playfair text-[1.4rem] ">
              <div className="  ">A Software Engineer</div>
              <span className=" font-tegomin text-[2rem] ">&</span>
              <div>A Renewable Energy Engineer</div>
            </div>
          </div>
        </div>
      </div>

      {/* Picture and Motivational quote */}
      <div className=" container m-auto ">
        <div className=" grid grid-cols-2 max-md:grid-cols-1 ">
          <div className=" flex items-center justify-center ">
            <Image
              className=""
              src={"/images/my_image_hd.png"}
              alt="My image"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className=" flex justify-center items-center m-auto max-lg:my-8 max-lg:mx-4 w-full ">
            <div className="relative flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl justify-center items-center lg:w-[90%] " >
              <div className="p-6 m-auto ">
                <h5 className="block mb-2 font-playfair  font-semibold leading-snug tracking-normal text-blue-gray-900 lg:text-[3rem] text-justify italic text-[1.4rem] ">
                  The most certain way to succeed is to always <br />
                  <p className=" text-center w-full font-bold py-4 ">
                    &#34; try one more time &#34;
                  </p>
                </h5>
                <p className=" text-right p-4 pt-0 italic text-[1.2rem] max-lg:text-[1rem] ">
                  ~ Thomas Edison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
