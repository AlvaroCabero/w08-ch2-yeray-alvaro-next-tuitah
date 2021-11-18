import "@fontsource/roboto";
import axios from "axios";
import style from "../../styles/Feed.module.css";

const Tuit = ({ tuit }) => {
  const onDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(
        `https://w08ch2-yerayalvaro-next-tuitah.herokuapp.com/tuits/delete/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <li className={style.square}>
        <div className={style.infobar}>
          <button className={style.button__likes}>{tuit.likes}</button>
          <button
            onClick={() => onDelete(tuit.id)}
            className={style.button__delete}
          >
            x
          </button>
        </div>
        <h4 className={style.text}>{tuit.text}</h4>
        <p className={style.date}>{tuit.date}</p>
      </li>
    </>
  );
};

export default Tuit;
