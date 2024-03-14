import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
// import { useRouter } from 'next/navigation';
import { useRouter } from "next/router";
import aitools from "../../../pages/aitools";

const Navbar = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    // Redirect the user to the provided URL
    window.location.href = "#pricing";
  };

  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: "Why us?", href: "#features" },
    { name: "AI Tools", href: "/aitools", notifications: "new" },
    { name: "Pricing", href: "#pricing" },
    { name: "Newsletter", href: "https://thataitoolsguy.substack.com/about" },

    // { name: "FAQs", href: "#faqs" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="relative">
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`bg-white pb-5 md:text-sm md:static md:block ${
          state
            ? "absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none"
            : "hidden"
        }`}
      >
        <div className="custom-screen gap-x-20 items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`flex-1 items-center mt-8 text-gray-600 md:font-medium md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="hover:text-gray-900 relative">
                    <Link href={item.href} className="block" scroll={false}>
                      {item.name}
                      {item.notifications && (
                        <div className="absolute inline-flex items-center justify-center w-9 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-6 -right-4 dark:border-gray-100">
                          {item.notifications}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              {/* <Link href="/login" className="block hover:text-gray-900">
                                Sign in
                            </Link> */}
              <NavLink
                href="#pricing"
                className="block font-medium text-sm text-white bg-black hover:bg-gray-800 focus:bg-gray-900 ring-offset-2 ring-gray-200 focus:ring-2"
                //   onClick={handleGetStartedClick}
              >
                Let's Order :)
              </NavLink>

              {/* <NavLink href="/pricing" className="flex items-center justify-center gap-x-1 text-sm text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
