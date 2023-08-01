
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
    // router.push('/getstarted');
    window.location.href =
    'https://buy.stripe.com/8wM9ED9IFeOJcJG144';
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    >
    <section className="py-2">
      <div className="container px-6 mx-auto">
        <div className="p-6 bg-gray-900 rounded-xl">
          <h4 className="text-2xl font-bold tracking-wide text-white mb-4">SUBMIT YOUR AI TOOL INFO</h4>
          <p className="text-sm text-gray-300">Please fill the below details</p>
          <form onSubmit={onSubmit} className="mt-8">
            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-sm font-medium text-gray-100">Name</label>
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
                        className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-sm font-medium text-gray-100">Email</label>
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
                        className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-sm font-medium text-gray-100">Website URL</label>
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
                        className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="flex flex-wrap items-center mb-6">
              <div className="w-full sm:w-1/3">
                <label htmlFor="name" className="text-sm font-medium text-gray-100">Category</label>
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
                        className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg"
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
                <label htmlFor="message" className="block mt-2 text-sm font-medium text-gray-100">Description</label>
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
                    className="block h-48 py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg resize-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-block py-2 px-10 text-sm font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default ContactForm;
