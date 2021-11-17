import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A/Y Tuitah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
