import Link from "next/link";
import style from "./Header.module.css";

const Header = ({ isWhere }) => (
  <ul className={style.navbar}>
    <Link href="/" passHref>
      <li
        className={`${style.navbar__element} ${
          isWhere ? `${style.active}` : ""
        }`}
      >
        Feed
      </li>
    </Link>
    <Link href="/post" passHref>
      <li
        className={`${style.navbar__element} ${
          isWhere ? "" : `${style.active}`
        }`}
      >
        Post
      </li>
    </Link>
  </ul>
);

export default Header;
