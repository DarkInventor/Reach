import Head from "next/head";
import Pricing from "../components/ui/Pricing";
import FAQs from "../components/ui/FAQs";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function index() {
  return (
    <>
      <Head>
      <title>Reachactory</title>
        {/* <meta
          name='description'
          content='Helping Businesses Grow'
        /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:image" content="/reach.png" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Pricing />
      <FAQs />
      <Footer />
    </>
  );
}
