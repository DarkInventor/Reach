import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KNSYHD9XC0"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KNSYHD9XC0');
        `,
          }}
        />
        <title>Reachactory</title>
        {/* <meta
          name='description'
          content='Helping Businesses Grow'
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/reach.png" />
        <link rel="icon" href="/favicon.ico" />

        <title>Reachactory - Get Featured on 100+ Directories</title>
        <meta
          name="title"
          content="Reachactory - Get Featured on 100+ Directories"
        />
        <meta
          name="description"
          content="I built an automation for sharing SaaS/AI tools with 100+ directories -increasing the reach of 100+ unique users per day."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.reachactory.online/" />
        <meta
          property="og:title"
          content="Reachactory - Get Featured on 100+ Directories"
        />
        <meta
          property="og:description"
          content="I built an automation for sharing SaaS/AI tools with 100+ directories -increasing the reach of 100+ unique users per day."
        />
        <meta
          property="og:image"
          content="/reach.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="/reach.png"
        />
        <meta
          property="twitter:title"
          content="Reachactory - Get Featured on 100+ Directories"
        />
        <meta
          property="twitter:description"
          content="I built an automation for sharing SaaS/AI tools with 100+ directories -increasing the reach of 100+ unique users per day."
        />
        <meta
          property="twitter:image"
          content="/reach.png"
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
