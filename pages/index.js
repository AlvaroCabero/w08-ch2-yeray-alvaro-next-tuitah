import axios from "axios";
import Tuit from "../components/Tuit/Tuit";
import style from "../styles/Feed.module.css";

const Feed = ({ tuits }) => (
  <>
    <div className={style.container}>
      <ul className={style.grid}>
        {tuits.map((tuit) => (
          <Tuit tuit={tuit} key={tuit.id} />
        ))}
      </ul>
    </div>
  </>
);

export async function getServerSideProps() {
  const { data: tuits } = await axios.get(
    "https://w08ch2-yerayalvaro-next-tuitah.herokuapp.com/tuits"
  );
  return { props: { tuits } };
}
export default Feed;
