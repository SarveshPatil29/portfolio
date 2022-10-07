import homeimg from "../../public/images/homeimg.jpg";
import Image from "next/image";
import classes from "./HomeBody.module.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React from "react";
import Link from "next/link";

export default function HomeBody() {
  return (
    <>
      <div className="h-max w-full pb-10">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664977999/background_bvsfdf.png"
            className="bg-cover h-full w-full"
          />
          {/* <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Demeter, Smart Agriculture
          </h1> */}
          <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
            Kick start your professional career with us!
          </h2>
          {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
          {/* <h3 className="absolute text-2xl text-green-300 bottom-5 right-5">Bottom Right</h3> */}
        </div>
      </div>

      <div className="p-10">
        <div className=" w-full lg:max-w-full lg:flex ">
          <div className="h-48 lg:h-auto lg:w-66 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664979501/needimage_vtkmvh.png"
              alt=""
            />
          </div>
          {/* <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"> */}
          <div className="mb-8 ml-9">
            {/* <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p> */}
            <div className="mt-16 text-4xl text-left text-gray-900 font-bold mb-2">
              Need of Portfolio
            </div>
            <p className="text-2xl text-slate-800	 ">
              Portfolios show the cumulative efforts and learning of a
              particular student over time.
            </p>
          </div>

          {/* </div> */}
        </div>
      </div>
{/* <br></br><br></br> */}
      <div className="p-10">
        <div className=" w-full lg:max-w-full lg:flex ">
          <div className="mb-8 ml-9">
            {/* <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p> */}
            <div className="mt-32 text-4xl text-left text-gray-900 font-bold mb-2">
              Customized Portfolio
            </div>
            <p className="text-2xl text-slate-800">
            Create a cohesive portfolio for your body of work, no matter what you make. Combine blank and pre-built sections and use text, imagery, or videos to highlight each piece.
            </p>
          </div>
          <div className="h-48 lg:h-auto lg:w-66 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/drr7rbizq/image/upload/v1664983443/customized_eyurwy.png"
              alt=""
            />
          </div>
          {/* <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"> */}

          {/* </div> */}
        </div>
      </div>
    </>
  );
}
