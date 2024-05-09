// "use client";
//     // import Navbar from "../components/ui/Navbar";
//     import NavbarAI from "../components/ui/NavbarAI";
//     import ShimmerButton from "../components/magicui/shimmer-button";
//     import { ChevronRight } from "lucide-react";
//     import { m } from "framer-motion";
//     import Link from "next/link";

//     const articles = [
//     {
//         imgUrl:"/mark2ai.png",
//         title: "Mark2AI: Linkedin Automation",
//         description:
//         "Send tons of linkedin DMs with just a single click",
//         url: "https://mark2ai.vercel.app/"
//     },
//     {
//         imgUrl:
//         "https://substackcdn.com/image/fetch/w_1360,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fde83c80a-a16a-4f26-b8fe-d4d0babc89ca_1280x696.png",
//         title: "That AI Tools Guy!",
//         description:
//         "Discover indie-built AI tools, developer stories, and marketing tips in 5 mins. For devs, indie hackers, AI enthusiasts, and experts. Let's dive in!",
//         url: "https://thataitoolsguy.substack.com/"
//     },
//     {
//         imgUrl:
//         "/freeresources.png",
//         title: "Free Resources",
//         description:
//         "Free list of 250+ AI directories for launching your tool",
//         url: "https://freeresources.vercel.app/"
//     },
//     // Add more articles as needed
//     ];

//     export default function AITools() {
//     return (
//         <>
//         <NavbarAI />

//         <section className="py">
//             <h1 className="mb-5 text-center font-mono text-2xl font-bold underline text-4xl underline-offset-9 decoration-dotted decoration-blue-800">
//             ai tools by
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]"> indie hackers</span>
//             </h1>
//             <div class="flex justify-end max-w-screen-lg mx-auto px-9 mb-2">
//             {/* <button class="relative mt-4 rounded-lg border-2 border-gray-900 bg-gray-900 px-6 py-2 font-medium text-white transition hover:translate-y-1">
//                 <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-blue-700">
//                 <svg
//                     viewBox="0 0 82 35"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
//                     fill="currentColor"
//                     />
//                     <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
//                     fill="currentColor"
//                     />
//                 </svg>
//                 </div>
//                 Submit Tool (FREE) +
//             </button> */}


//             {/* <ShimmerButton
//                 className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
//                 background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)"
//                 onClick={() => {
//                   router.push("/login");
//                 }}
//               >
//                 <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
//                   Get started for free
//                 </span>
//                 <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
//               </ShimmerButton> */}
//               {/* <m.div
//             className="flex md:flex-col items-center justify-center w-[500px]"
//             variants={{
//               hidden: { opacity: 0, y: -10 },
//               show: { opacity: 1, y: 0, transition: { type: "spring" } },
//             }}
//           >
//             <div className="grid md:grid-cols-1 place-items-center">
//               <ShimmerButton
//                 className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
//                 background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)"
//                 // onClick={() => {
//                 //   router.push("/login");
//                 // }}
//               >
//                 <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
//                   Get started for free
//                 </span>
//                 <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
//               </ShimmerButton> */}

//               {/* <Link
//                 className={cn(
//                   buttonVariants({
//                     size: "lg",
//                   }),
//                   "gap-2 whitespace-pre flex",
//                   "group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-sm"
//                 )}
//                 href={siteConfig.links.cal}
//                 target="_blank"
//               >
//                 <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
//                 <Phone className="h-4 w-4 fill-current" />
//                 Schedule a call
//               </Link> */}
//             {/* </div> */}

//             {/* <div className="mt-6">
//               <JoinUsers />
//             </div> */}
//           {/* </m.div> */}
//           <div className="flex flex-row gap-4">
//       {/* <Link
//         href="https://vercel.com/blog/ai-accelerator-participants"
//         target="_blank"
//         className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md"
//       >
//         <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

//         <img
//           src="/accelerator-badge-dark.png"
//           alt="Backed by Vercel AI Accelerator"
//           className="w-36"
//         />
//       </Link> */}

//       <Link
//         href="/ContactForm"
//         target="_blank"
//         className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md"
//       >
//         <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

//         <img
//           src="/submitprice.png"
//           alt="Submit my Tool"
//           className="w-50"
//         //   style={{ height: '40px' }}
//         />
//       </Link>
//     </div>
        
        
//         </div>

//             <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
//             {articles.map((article, index) => (
//                 <article
//                 key={index}
//                 className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg"
//                 >
//                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                     <img
//                     src={article.imgUrl}
//                     className="h-56 w-full object-cover"
//                     alt=""
//                     />
//                     <div className="flex-auto px-6 py-5">
//                     <span className="mb-2 flex items-center text-sm font-semibold">
//                         <svg
//                         className="mr-1"
//                         xmlns="http://www.w3.org/2000/svg"
//                         aria-hidden="true"
//                         role="img"
//                         width="1em"
//                         height="1em"
//                         preserveAspectRatio="xMidYMid meet"
//                         viewBox="0 0 24 24"
//                         >
//                         <path
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="1.5"
//                             d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z"
//                         />
//                         </svg>
//                         Awards
//                     </span>
//                     <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
//                         {article.title}
//                     </h3>
//                     <p className="mb-4 text-base font-light">
//                         {article.description}
//                     </p>
//                     <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
//                         Learn More
//                     </span>
//                     </div>
//                 </a>
//                 </article>
//             ))}
//             </div>
//         </section>
//         </>
//     );
//     }

"use client";
    // import Navbar from "../components/ui/Navbar";
    import NavbarAI from "../components/ui/NavbarAI";
    import ShimmerButton from "../components/magicui/shimmer-button";
    import { ChevronRight } from "lucide-react";
    import { m } from "framer-motion";
    import Link from "next/link";
    // import { promises as fs } from 'fs';
    import chatbotData from "./chatbot.json";
    import AIdirectory from "./aidirectory";
   

    export default function AITools() {
    const articles = chatbotData;
    return (
      
        <>
        <NavbarAI />
       
        <section className="py">
       
            <h1 className="text-center  text-4xl  mb-8 mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r text-black"> List of </span> AI Tools 
            </h1>
            <div className="flex justify-end max-w-screen-lg mx-auto px-9 mb-2">
          
          <div className="flex flex-row gap-4">
 

      <Link
        href="/ContactForm"
        target="_blank"
        className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md mb-5"
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
        {/* <AIdirectory /> */}
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
                        {article.short_desc}
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


