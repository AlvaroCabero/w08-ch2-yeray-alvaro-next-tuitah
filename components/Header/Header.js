import Link from "next/link";
import style from "./Header.module.css";

const Header = () => (
  <ul className={style.navbar}>
    <Link href="/" passHref>
      <li className={style.navbar__element}>Feed</li>
    </Link>
    <Link href="/post" passHref>
      <li className={style.navbar__element}>Post</li>
    </Link>
  </ul>
);

export default Header;
