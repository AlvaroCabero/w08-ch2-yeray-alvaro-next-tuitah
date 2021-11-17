// import Head from "next/head";
// import Header from "@/components/Header/Header";
// import styles from "./index.module.css";
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
