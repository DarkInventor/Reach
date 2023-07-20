import Link from "next/link";
import Newsletter from '../Newsletter';
import Brand from '../Brand';

const navigation = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQs", href: "#faqs" },
];

const Footer = () => (
    <footer className="pt-0 sm:pt-0 text-center">
        <div className="custom-screen text-gray-600">
            <div className="flex flex-wrap gap-y-10 items-center justify-center">
                <div className="space-y-4 text-center">
                    <Link href="/" className="inline-block">
                        <Brand />
                    </Link>
                    <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">Websites Traffic Generation</h2>
                    <p className="max-w-md">
                        We use the best strategies for companies worldwide to improve traffic on their sites.
                    </p>
                    {/* <div className="pt-2 mt-8 flex items-center gap-x-6 text-gray-400 justify-center">
                        <a href="https://www.facebook.com/kathan.mehta.315/" target="_blank" rel="noreferrer" aria-label="Social media">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="https://twitter.com/kathanmehtaa" target="_blank"  rel="noreferrer" aria-label="Social media">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/iamkathan/" target="_blank"  rel="noreferrer" aria-label="Social media">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 28 28"><g clipPath="url(#clip0_1274_2978)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z" /></g><defs><clipPath id="clip0_1274_2978"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>
                        </a>
                    </div> */}
                </div>
                {/* <Newsletter /> */}
            </div>
            <div className="mt-16 py-10 border-t flex-row-reverse items-center justify-center sm:flex">
                {/* <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
                    {
                        navigation.map((item, idx) => (
                            <li key={idx} className="font-medium text-gray-700 hover:text-gray-900 duration-150">
                                <Link href={item.href}>
                                    {/* {item.name} */}
                                {/* </Link> */}
                            {/* </li> */}
                        {/* )) */}
                    {/* } */}
                {/* </ul> */} 
                <p className="mt-6 sm:mt-0">© 2023 Reacher Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer;
