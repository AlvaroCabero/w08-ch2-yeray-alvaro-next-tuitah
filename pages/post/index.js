import axios from "axios";

const PostPage = ({ tuits }) => (
  <>
    <h2>POST PAGE</h2>
  </>
);

const getServerSideProps = async () => {
  const tuits = await axios.get(
    "https://w08ch2-yerayalvaro-next-tuitah.herokuapp.com/tuits"
  );
  console.log(tuits);
  return { props: { tuits } };
};

export default PostPage;
