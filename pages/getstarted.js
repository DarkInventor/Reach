import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import NavLink from '../components/ui/NavLink';
import { motion } from "framer-motion";

const features = [
  {
    name: 'Fill out the form',
    description:
      'Fill your AI tool relevant information in the form.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Verification process',
    description: 'Our team will carefully review and verify the information you have submitted.',
    icon: LockClosedIcon,
  },
  {
    name: 'Promotion across AI directories',
    description: 'Once verified, your AI tool will be shared on over 100+ AI directories, gaining exposure and visibility to a wider audience.',
    icon: ServerIcon,
  },
]

export default function getstarted() {
  return (
    <motion.div
initial={{ opacity: 0, scale: 1 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 2 }}
>
    <div className="overflow-hidden bg-white py-12 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Maximize your AI Product Reach</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simply Submit Your URL</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Guaranteed continuous traffic to your AI product. We'll handle everything. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* https://tailwindui.com/img/component-images/dark-project-app-screenshot.png */}
          <img
            src= "form.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-10">
            <NavLink
              href="/ContactForm"
              className="flex items-center gap-x-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
              // onClick={handleGetStartedClick}
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            {/* <NavLink href="#cta" className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900" scroll={false}>
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink> */}
          </div>
    </div>
      </motion.div>
  )

}
