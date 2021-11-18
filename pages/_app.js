import "../styles/global.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import style from "../styles/App.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={style.app}>
      <Head>
        <title>A/Y Tuitah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
