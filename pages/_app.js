import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
     
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KNSYHD9XC0"></script>
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
        <meta
          name='description'
          content='The ultimate way to get more website traffic and grow your online business.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property="og:image" content="/reach.png" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
