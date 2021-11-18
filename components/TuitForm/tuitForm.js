import axios from "axios";
import { useRouter } from "next/router";
import style from "./TuitForm.module.css";

const { useState, useEffect } = require("react");

const Form = () => {
  const router = useRouter();
  const initialValues = {
    text: "",
  };

  const [tuitData, setTuitData] = useState(initialValues);

  const [isDisabled, setIsDisabled] = useState(true);

  console.log(router.pathname);

  const changeData = (event) => {
    setTuitData({
      ...tuitData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (tuitData.text) {
      setIsDisabled(false);
    }
  }, [tuitData.text]);

  const onSubmit = async () => {
    await axios.post(
      "https://w08ch2-yerayalvaro-next-tuitah.herokuapp.com/tuits/new",
      tuitData
    );
    router.push("/");
  };

  const onPreSubmit = (event) => {
    event.preventDefault();
    if (tuitData.text !== "") {
      onSubmit();
    }
  };

  return (
    <>
      <form
        className={style.grid}
        noValidate
        autoComplete="off"
        onSubmit={onPreSubmit}
      >
        <label className={style.text_label} htmlFor="text">
          <textarea
            className={style.square}
            placeholder="Tuit text (max 200)"
            maxLength="200"
            rows="12"
            cols="48"
            type="textarea"
            id="text"
            value={tuitData.text}
            onChange={changeData}
          />
        </label>
        <div className={style.button_container}>
          <button className={style.button} disabled={isDisabled} type="submit">
            Post
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
