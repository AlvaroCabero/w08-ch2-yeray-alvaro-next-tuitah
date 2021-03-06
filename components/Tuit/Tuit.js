import "@fontsource/roboto";
import axios from "axios";
import PropTypes from "prop-types";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en-GB.json";
import style from "../../styles/Feed.module.css";

TimeAgo.addLocale(en);

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
        <ReactTimeAgo className={style.date} date={tuit.date} locale="en-GB" />
      </li>
    </>
  );
};

Tuit.propTypes = {
  tuit: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.date,
    likes: PropTypes.number,
  }),
};

export default Tuit;
