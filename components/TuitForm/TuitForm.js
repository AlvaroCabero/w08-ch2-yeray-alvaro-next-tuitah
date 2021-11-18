import axios from "axios";
import { useRouter } from "next/router";

const { useState, useEffect } = require("react");

const Form = () => {
  const router = useRouter();
  const initialValues = {
    text: "",
  };

  const [tuitData, setTuitData] = useState(initialValues);

  const [isDisabled, setIsDisabled] = useState(true);

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

  const onSubmit = async (event) => {
    event.preventDefault();

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
      <form noValidate autoComplete="off" onSubmit={onPreSubmit}>
        <label htmlFor="text">
          I´d like to say:
          <textarea
            placeholder="Tuit text (max 200)"
            maxLength="200"
            rows="7"
            cols="44"
            type="textarea"
            id="text"
            value={tuitData.text}
            onChange={changeData}
          />
        </label>

        <button disabled={isDisabled} type="submit">
          Post
        </button>
      </form>
    </>
  );
};

export default Form;
