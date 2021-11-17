import Head from "next/head";
import Header from "../components/Header/Header";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yeray-Álvaro Tuitah</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
