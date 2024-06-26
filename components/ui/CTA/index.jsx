import Image from "next/image";
import { useRouter } from "next/router";
import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import cta_image from "../../../public/cta-img.svg";
import twt1 from "../../../public/twt1.png";
import testimonial1 from "../../../public/testimonial1.jpg";
import testimonial2 from "../../../public/testimonial2.png";
import testimonial3 from "../../../public/testimonial3.png";
import testimonial4 from "../../../public/testimonial4.jpg";
import twt4 from "../../../public/twt4.png";
import twt5 from "../../../public/twt5.png";
import twt6 from "../../../public/twt6.png";
import twt7 from "../../../public/twt7.png";


const CTA = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    window.location.href = "/getstarted";
  };

  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
        <h2 className="text-gray-600 text-xl font-semibold sm:text-3xl text-center sm:text-left">
  We submit your product to over top 100+ directories for
  increasing your reach by over 100+ unique users per day.
</h2>
          {/* <p className="text-gray-600">
                    Guaranteed continuous traffic to your Product. Submit your Product's URL, and we'll handle the rest. Get featured on 100+ top Directories, skyrocketing your visibility. Watch your Product thrive in the global landscape.
                    </p> */}
          <div className="pt-4 text-center">
            <NavLink
              href="https://drive.google.com/file/d/1tA-JoKsT9kXdqc6uoBKa6njyajmZ-JAb/view?usp=drive_link"
              className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 sm:text-center"
              // onClick={handleGetStartedClick}
            >
              {" "}
              Click here for the list of directories
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Try it out */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg> */}
            </NavLink>
          </div>
        </div>
        <div className="flex-none w-full md:max-w-xl mb-10">
          <Image
            src={cta_image}
            alt="chart"
            className="w-full shadow-lg rounded-lg border"
          />
        </div>
      </div>
      <h5 class="text-lg text-gray-600 font-semibold mx-auto sm:text-3xl text-center p-20">
      Collaborating with Over 20+ Innovative Startups 🎉. <br /> Discover the Proof of Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]">
          {" "}
          Exceptional Service
        </span>
      </h5>

      {/* <div class="grid grid-cols md:grid-cols-2 gap-4 mt-20 mr-4">
        <div class="grid gap-4 ml-4">
          <div class="rounded-lg overflow-hidden">
            <Image class="w-full" src={testimonial1} alt="Twt1" />
          </div>
          <div class="rounded-lg overflow-hidden">
            <Image class="w-full" src={testimonial3} alt="Twt6" />
          </div>
        </div>
        <div class="grid gap-4 mt-10">
          <div class="rounded-lg overflow-hidden">
            <Image class="w-full" src={testimonial2} alt="Twt3" />
          </div>
          <div class="rounded-lg overflow-hidden">
            <Image class="w-full" src={testimonial4} alt="Twt4" />
          </div>
        </div>
      </div> */}

<div className="container mx-auto px-4 sm:px-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
      <div className="rounded-lg overflow-hidden">
        <Image src={testimonial1} alt="Testimonial 1" width={500} height={300} layout="responsive" className="w-full h-auto object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image src={testimonial3} alt="Testimonial 3" width={500} height={300} layout="responsive" className="w-full h-auto object-cover" />
      </div>
    </div>
    <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mt-6 sm:mt-0">
      <div className="rounded-lg overflow-hidden">
        <Image src={testimonial2} alt="Testimonial 2" width={500} height={300} layout="responsive" className="w-full h-auto object-cover" />
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image src={testimonial4} alt="Testimonial 4" width={500} height={300} layout="responsive" className="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</div>
    </SectionWrapper>
  );
};

export default CTA;
