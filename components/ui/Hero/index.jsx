// import { useRouter } from 'next/router';
import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
// import getstarted from '../GetStarted/getstarted';
// import twt8 from '../../../public/twt8.png';
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    // window.location.href =
    //   'https://buy.stripe.com/8wM9ED9IFeOJcJG144';
    router.push("/getstarted");
    // window.open('/getstarted', '_blank');
  };

  return (
    <section>
      <GradientWrapper
        wrapperClassName="inset-0"
        className="custom-screen text-gray-800 "
      >
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#444] leading-tight">
            Get Featured On{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
              Top 100+ Directories
            </span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-500">
            Boost continuous traffic and optimize SEO for better ranking
          </p>
          {/* <a href="#" className="text-[#9867F0] hover:underline font-medium text-lg">
      Learn More
    </a> */}
          {/* {/* </div> */}
          {/* <GradientWrapper wrapperClassName="inset-0" className="custom-screen text-gray-600">
        <div className="space-y-5 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl text-gray-800 font-extrabold mx-auto sm:text-7xl">
            Get Featured on  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
            Top 100+ Directories</span>
            
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-3xl text-gray-600">
            Amplify continuous traffic and optimize seo for better ranking
          </p> */}
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="#pricing"
              className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
              // onClick={handleGetStartedClick}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            {/* <NavLink href="#cta" className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900" scroll={false}>
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink> */}
          </div>
        </div>
      </GradientWrapper>

      <div className="mt-0 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-between items-center text-center px-4 sm:px-0">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Featured Products
            </h2>
            <Button
              onClick={() => router.push("/aitools")}
              className="text-sm bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-700 border"
            >
              View All
            </Button>
          </div>

          <div className="relative flex gap-4 mt-4 sm:px-0 px-4">
            {/* Example Product */}
            <a
              href="https://wemate.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/featuredp1.png"
                alt="Product Name"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
