const Tuit = ({ tuit }) => (
  <>
    <li className="">
      <h4 className="">{tuit.text}</h4>
      <p className="">{tuit.date}</p>
      <button>{tuit.likes}</button>
      <button>x</button>
    </li>
  </>
);

export default Tuit;
