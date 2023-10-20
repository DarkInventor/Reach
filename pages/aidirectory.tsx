"use client";
// import { Button } from 'flowbite-react';
// import Link from 'next/link';
// import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

// export default function aidirectory() {
//   return (
//     <div className="container text-center mx-auto p-4">
  
//     <div className="flex lg-ml-5 rounded-lg text-lg" role="group">
//       <Link className="bg-gray-900 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/aitools">Chatbot</Link>
//       <Link className="bg-gray-900 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/music">Music</Link>
//       <Link className="bg-gray-900 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/summary">Summary</Link>
//       <Link className="bg-gray-900 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/seo">SEO</Link>
//     </div>
  
    
//     </div>

//   )
// }

import React, { useState } from 'react';
import Link from 'next/link';

export default function Aidirectory() {
  const [activeLink, setActiveLink] = useState('aitools'); // Default active link

  return (
    <div className="container text-center mx-auto p-4">
      <div className="flex justify-center lg:ml-5 rounded-lg text-lg">
      <Link className="bg-gray-900 rounded-l-lg text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/aitools">
        
        Chatbot
     
    </Link>
        <Link className="bg-gray-900 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/music">
          
          
          Music</Link>
       <Link className="bg-gray-900 text-white hover:bg-blue-400  px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/summary">Summary</Link>
       <Link className="bg-gray-900 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" href="/seo">SEO</Link>
        {/* Other links */}
      </div>
    </div>
  );
}
