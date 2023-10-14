"use client";
    import Navbar from "../components/ui/Navbar";
    import ShimmerButton from "../components/magicui/shimmer-button";
    import { ChevronRight } from "lucide-react";
    import { m } from "framer-motion";
    import Link from "next/link";

    const articles = [
    {
        imgUrl:"data:image/jpeg;base64,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",
        title: "LLM Report: Log and Monitor your AI Apps",
        description:
        "Know exactly what's happening in your AI app with realtime logging, analytics, usage reports, and alerts.",
        url: "https://llm.report/"
    },
    {
        imgUrl:
        "https://substackcdn.com/image/fetch/w_1360,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fde83c80a-a16a-4f26-b8fe-d4d0babc89ca_1280x696.png",
        title: "That AI Tools Guy!",
        description:
        "Discover indie-built AI tools, developer stories, and marketing tips in 5 mins. For devs, indie hackers, AI enthusiasts, and experts. Let's dive in!",
        url: "https://thataitoolsguy.substack.com/"
    },
    {
        imgUrl:
        "data:image/jpeg;base64,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",
        title: "Automatic Chat",
        description:
        "Automated AI Chatbot for Your Website",
        url: "https://automatic.chat/?ref=futuretools.io"
    },
    // Add more articles as needed
    ];

    export default function AITools() {
    return (
        <>
        {/* <Navbar /> */}

        <section className="py-2">
            <h1 className="mt-10 mb-5 text-center font-mono text-2xl font-bold underline text-4xl underline-offset-9 decoration-dotted decoration-blue-800">
            ai tools by
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9867F0] to-[#ED4E50]"> indie hackers</span>
            </h1>
            <div class="flex justify-end max-w-screen-lg mx-auto px-9 mb-2">
            {/* <button class="relative mt-4 rounded-lg border-2 border-gray-900 bg-gray-900 px-6 py-2 font-medium text-white transition hover:translate-y-1">
                <div class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-blue-700">
                <svg
                    viewBox="0 0 82 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
                    fill="currentColor"
                    />
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
                    fill="currentColor"
                    />
                </svg>
                </div>
                Submit Tool (FREE) +
            </button> */}


            {/* <ShimmerButton
                className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)"
                onClick={() => {
                  router.push("/login");
                }}
              >
                <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                  Get started for free
                </span>
                <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
              </ShimmerButton> */}
              {/* <m.div
            className="flex md:flex-col items-center justify-center w-[500px]"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <div className="grid md:grid-cols-1 place-items-center">
              <ShimmerButton
                className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)"
                // onClick={() => {
                //   router.push("/login");
                // }}
              >
                <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                  Get started for free
                </span>
                <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
              </ShimmerButton> */}

              {/* <Link
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "gap-2 whitespace-pre flex",
                  "group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-sm"
                )}
                href={siteConfig.links.cal}
                target="_blank"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                <Phone className="h-4 w-4 fill-current" />
                Schedule a call
              </Link> */}
            {/* </div> */}

            {/* <div className="mt-6">
              <JoinUsers />
            </div> */}
          {/* </m.div> */}
          <div className="flex flex-row gap-4">
      {/* <Link
        href="https://vercel.com/blog/ai-accelerator-participants"
        target="_blank"
        className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md"
      >
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

        <img
          src="/accelerator-badge-dark.png"
          alt="Backed by Vercel AI Accelerator"
          className="w-36"
        />
      </Link> */}

      <Link
        href="https://buildspace.so/sf1"
        target="_blank"
        className="group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-md"
      >
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

        <img
          src="/submittool.png"
          alt="Submit my Tool"
          className="w-40"
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
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                    src={article.imgUrl}
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
                        {article.title}
                    </h3>
                    <p className="mb-4 text-base font-light">
                        {article.description}
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
