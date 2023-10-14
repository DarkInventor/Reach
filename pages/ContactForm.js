
// import React, { useState } from "react";
// import { useFormspark } from "@formspark/use-formspark";

// const FORMSPARK_FORM_ID = "y2Vy8UTF";

// function ContactForm() {
//   const [submit, submitting] = useFormspark({
//     formId: FORMSPARK_FORM_ID,
//   });

//   const [message, setMessage] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [site, setSite] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await submit({ message, name, email, site });
//     alert("Form submitted");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//        <label for="name">Name</label>
//      <input type="text" id="name" name="name" placeholder="Name" required="" value={name} onChange={(e) => setName(e.target.value)} />
//      <label for="email">Email</label>
//      <input type="email" id="email" name="email" placeholder="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
//      <label for="email">Website</label>
//      <input type="text" id="site" name="site" placeholder="site" required="" value={site} onChange={(e) => setSite(e.target.value)}/>
//     <label for="message">Description</label>
//       <textarea id="message"
//       name="message"
//       placeholder="Message"
//       required="" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button type="submit" disabled={submitting}>
//         Send
//       </button>
//     </form>
//   );
// }

// export default ContactForm;

import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
// import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ShimmerButton from "../components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";
import { m } from "framer-motion";
import { Link } from "lucide-react";
import { cn } from "../lib/utils";
import GridPattern from "../components/magicui/grid-pattern";

const FORMSPARK_FORM_ID = "y2Vy8UTF";

function ContactForm() {

  // const router = useRouter();

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ message, name, email, site, category });
    // alert("Form submitted");
    alert("We will review the submission and get back to you within 24 hours, Thank You :)");
    setTimeout(() => {
      resolve();
    }, 3000); // 3000 milliseconds (3 seconds)
  
    // router.push('/getstarted');
    window.location.href =
    'https://www.reachactory.online/';
  };
  
  const NLclick = () => {
    window.location.href = 'https://thataitoolsguy.substack.com/'; // Redirect to google.com
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    >
    <section className="py-2">
    <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "-z-10 stroke-gray-300/50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div className="container px-6 mx-auto">
        <div className="p-6 rounded-xl">
          <h4 className="text-4xl font-bold tracking-wide mb-4 text-gray-600 underline">SUBMIT YOUR AI TOOL HERE</h4>
          <p className="text-md text-gray-500 font-bold">Please fill all the details*</p>
          {/* <hr /> */}
          <div class="mt-5 bg-gray-900 text-center py-4 lg:px-4 lg:w-[580px] rounded-lg">
        
  <div class="cursor-default p-2 bg-gray-700 items-center text-gray-900 leading-none lg:rounded-full flex lg:inline-flex hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]" role="alert" onClick={NLclick}>
    <span class="flex rounded-full bg-blue-500 text-white uppercase px-2 py-1 text-xs font-bold mr-3">Free</span>
    <span class="font-semibold mr-2 text-left flex-auto text-white">Subscribe to the newsletter : That AI Tools Guy!</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>
          <form onSubmit={onSubmit} className="mt-8">
            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-lg font-medium text-gray-600">Name</label>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="max-w-md">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Please Enter Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 hover:border-orange-900 focus:border-red-500 rounded-lg hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-lg font-medium text-gray-600">Email</label>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="max-w-md">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                      <input
                        type="email"
                        id="email"
                        name="name"
                        placeholder="Please Enter Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 hover:border-orange-900 focus:border-red-500 rounded-lg hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                        // className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-lg font-medium text-gray-600">Website URL</label>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="max-w-md">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                      <input
                        type="text"
                        id="site"
                        name="site"
                        placeholder="Please Enter Site URL"
                        required
                        value={site}
                        onChange={(e) => setSite(e.target.value)}
                        className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 hover:border-orange-900 focus:border-red-500 rounded-lg hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                        // className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-lg font-medium text-gray-600">Category</label>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="max-w-md">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                      <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Please Enter category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 hover:border-orange-900 focus:border-red-500 rounded-lg hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                        // className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            {/* Email Field */}
            {/* Site Field */}

            <div className="flex flex-wrap items-start mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="message" className="block mt-2 text-lg font-medium text-gray-600">Description</label>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="max-w-md">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Description here..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="block h-40 py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-900 hover:border-orange-900 focus:border-red-500 rounded-lg hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                    // className="block h-48 py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg resize-none"
                  />
                </div>
              </div>
            </div>

            {/* <button
              type="submit"
              disabled={submitting}
              className="inline-block py-2 px-10 text-sm font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
            >
              Send
            </button> */}
            <hr />

<m.div
            className="flex md:flex-col items-center justify-center md:w-[500px] lg:w-[1200px] lg:mt-9"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <div className="grid md:grid-cols-4 place-items-center">
              <ShimmerButton
                className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                background="radial-gradient(ellipse 80% 20% at 50% 110%, #cfcfcf, #000000)"
              >
                <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                 Submit
                </span>
                <ChevronRight className="h-5 w-2 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
              </ShimmerButton> 

              
              
            </div>


          </m.div>
          </form>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default ContactForm;
