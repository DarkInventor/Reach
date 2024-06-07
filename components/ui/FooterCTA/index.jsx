import DarkWrapper from "../../DarkWrapper"
import NavLink from "../NavLink"
import { useRouter } from 'next/router';

const FooterCTA = () => {

    const router = useRouter();

    const handleGetStartedClick = () => {
      // Redirect the user to the provided URL
      window.location.href = '/getstarted';
    };

    const handleTwitterConnect = () => {
        const twitterUrl = 'https://twitter.com/kathanmehtaa';
        window.location.href = twitterUrl;
      };

    return (
        <DarkWrapper>
            <div className="custom-screen  gap-x-12 justify-center md:flex">
                <div className="max-w-xl">
                    <h2 className=" text-6xl text-blue-200 font-semibold sm:text-6xl">
                        Want to connect ?
                    </h2>
                    {/* <p className="ml-6 mt-5 text-gray-300">
                    Join us and witness your Product shine in the global landscape
       
                    </p> */} 
                                 <div className="space-y-4 text-center">
                     <button type="button" onClick={handleTwitterConnect} class="mt-10 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
  <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
  </svg>
  Let's Connect on Twitter!
</button></div>
                </div>
                {/* <div className="flex-none mt-4 md:mt-0">
                    <NavLink
                        href="/"
                        className="inline-flex items-center gap-x-2 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                        onClick={handleGetStartedClick}
                    >
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div> */}
            </div>
        </DarkWrapper>
    )
}

export default FooterCTA