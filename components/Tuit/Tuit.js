import style from "../../styles/Feed.module.css";

const Tuit = ({ tuit }) => (
  <>
    <li className={style.square}>
      <div className={style.infobar}>
        <button className={style.button__likes}>{tuit.likes}</button>
        <button className={style.button__delete}>x</button>
      </div>
      <h4 className={style.text}>{tuit.text}</h4>
      <p className={style.date}>{tuit.date}</p>
    </li>
  </>
);

export default Tuit;
