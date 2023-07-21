import Image from 'next/image'
import { useRouter } from 'next/router';
import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import cta_image from '../../../public/cta-img.svg'

const CTA = () => {
    const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    window.location.href =
      'https://checkout.stripe.com/c/pay/cs_live_a1oYas6WOoVDpX6vejGAuoeoYYYbempqkg6jCLv43vL2ZQERjS1ia1IdJ7#fidkdWxOYHwnPyd1blppbHNgWjA0S1NoVGpANX1vdWtXNkNDUDBgbzRjZmZBdmtBRE03VDc1SXdod0JtPV09QkZRVnBANWJEND1QV3JXYmNsNEdANG1CbzJwUFBBREhhNlR0UGZocnZsdHd%2FNTViRjZrNHBIaCcpJ3VpbGtuQH11anZgYUxhJz8nPXJIPEBBPExDYEpPZk9CNDExJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKnErZmoqJ3gl';
  };

    return (
        <SectionWrapper id="cta" className="overflow-hidden">
            <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
                <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Seize This Opportunity Now - Submit Your AI Tool and Boost Its Visibility!
                    </h2>
                    <p className="text-gray-600">
                    Unleash your AI tool's potential with our expert AI Directory Submission! We'll list your innovation on 100+ AI directories, ensuring maximum exposure to your target audience. Your listing won't expire, guaranteeing continuous traffic to your website. Newer tools get priority placement, amplifying their visibility. Boost your AI startup today - Get featured now!
                    </p>
                    <div className="pt-1">
                        <NavLink
                            href="/"
                            className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                            onClick={handleGetStartedClick}
                        >
                            Try it out
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                        </NavLink>
                    </div>
                </div>
                <div className="flex-none w-full md:max-w-xl">
                    <Image src={cta_image} alt="chart" className='w-full shadow-lg rounded-lg border' />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA