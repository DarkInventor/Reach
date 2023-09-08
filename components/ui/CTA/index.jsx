import Image from 'next/image'
import { useRouter } from 'next/router';
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import cta_image from '../../../public/cta-img.svg'
import twt1 from '../../../public/twt1.png';
import testimonial1 from '../../../public/testimonial1.jpg';
import testimonial2 from '../../../public/testimonial2.png';
import testimonial3 from '../../../public/testimonial3.png';
import testimonial4 from '../../../public/testimonial4.jpg';
import twt4 from '../../../public/twt4.png';
import twt5 from '../../../public/twt5.png';
import twt6 from '../../../public/twt6.png';
import twt7 from '../../../public/twt7.png';

const CTA = () => {
    const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    window.location.href =
      '/getstarted';
  };

    return (
        <SectionWrapper id="cta" className="overflow-hidden">
            <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
                <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
                    <h2 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
                    we'll submit your product to over top 100+ directories for increasing your reach by over 50%.
                    </h2>
                    {/* <p className="text-gray-600">
                    Guaranteed continuous traffic to your Product. Submit your Product's URL, and we'll handle the rest. Get featured on 100+ top Directories, skyrocketing your visibility. Watch your Product thrive in the global landscape.
                    </p> */}
                    <div className="pt-1">
                        <NavLink
                            href="#pricing"
                            className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                            // onClick={handleGetStartedClick}
                        > ↓

                            {/* Try it out */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg> */}
                        </NavLink>
                    </div>
                </div>
                <div className="flex-none w-full md:max-w-xl">
                    <Image src={cta_image} alt="chart" className='w-full shadow-lg rounded-lg border' />
                </div>
            </div>
            <h5 class="text-xl text-gray-600 font-bold mx-auto sm:text-3xl text-center mt-20">
    we've worked with 5+ innovative startups, here's proof of  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]"> service for you</span>
        
</h5>

      <div class="grid grid-cols md:grid-cols-2 gap-4 mt-20 mr-4">
  <div class="grid gap-4 ml-4">
    <div class="rounded-lg overflow-hidden">
      <Image class="w-full" src={testimonial1} alt="Twt1" />
    </div>
    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                <div className="grid gap-4 ml-4">
                    <a href="https://twitter.com/kathanmehtaa/status/1697519440823517234?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer">
                        <img src={testimonial1} alt="Tweet" />
                    </a>
                </div>
            </div> */}
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
  {/* <div class="grid gap-4">
    <div class="rounded-lg overflow-hidden">
      <Image class="w-full" src={twt5} alt="Twt5" />
    </div>
    {/* <div class="rounded-lg overflow-hidden">
      <Image class="w-full" src={twt2} alt="Twt2" />
    </div> */}
  {/* </div>
  <div class="grid gap-4 mt-20 mr-5">
    <div class="rounded-lg overflow-hidden">
      <Image class="w-full" src={twt7} alt="Twt7" />
    </div>
  </div> */} 
</div>

        </SectionWrapper>
    )
}

export default CTA