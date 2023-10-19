
"use client";
// import Navbar from "../components/ui/Navbar";
import NavbarAI from "../components/ui/NavbarAI";
import ShimmerButton from "../components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";
// import { promises as fs } from 'fs';
import chatbotData from "./summaries.json";

export default function summary() {
const articles = chatbotData;
return (
  
    <>
    <NavbarAI />
    <section className="py">
        <h1 className="mb-5 text-center font-mono text-2xl font-bold underline text-4xl underline-offset-9 decoration-dotted decoration-blue-800">
        ai tools by
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]"> indie hackers</span>
        </h1>
        <div className="flex justify-end max-w-screen-lg mx-auto px-9 mb-2">
      
      <div className="flex flex-row gap-4">


  <Link
    href="/ContactForm"
    target="_blank"
    className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md"
  >
    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

    <img
      src="/submitprice.png"
      alt="Submit my Tool"
      className="w-50"
    //   style={{ height: '40px' }}
    />
  </Link>
</div>
    
    
    </div>

        <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
        {articles.map((article, index) => (
            <article
            key={index}
            className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg"
            >
            <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img
                src={article.imageurl}
                className="h-56 w-full object-cover"
                alt=""
                />
                <div className="flex-auto px-6 py-5">
                <span className="mb-2 flex items-center text-sm font-semibold">
                    <svg
                    className="mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
                    />
                    </svg>
                    Awards
                </span>
                <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                    {article.name}
                </h3>
                <p className="mb-4 text-base font-light">
                    {article.shortdescription}
                </p>
                <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                    Learn More
                </span>
                </div>
            </a>
            </article>
        ))}
        </div>
    </section>
    </>
);
}


