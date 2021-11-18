import "../styles/global.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";
import style from "../styles/App.module.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={style.app}>
      <Head>
        <title>A/Y Tuitah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isWhere={router.pathname === "/"} />
      <Component {...pageProps} />
    </div>
  );
}
