<<<<<<< HEAD
=======
<<<<<<< HEAD
import Head from 'next/head'
import styles from './index.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new" className={styles.card}>
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  </div>
)

export default Home
=======
>>>>>>> main
import axios from "axios";
import Tuit from "../components/Tuit/Tuit";

const Home = ({ tuits }) => (
  <>
    <h2>FEED</h2>
    {tuits.map((tuit) => (
      <Tuit tuit={tuit} key={tuit.id} />
    ))}
  </>
);

export async function getServerSideProps() {
  const { data: tuits } = await axios.get(
    "https://w08ch2-yerayalvaro-next-tuitah.herokuapp.com/tuits"
  );
  return { props: { tuits } };
}
export default Home;
>>>>>>> origin/feature/AddTuitFeedComponent
