import Link from "next/link";

const Header = () => (
  <ul className="navbar">
    <Link href="/" passHref>
      <li className="navbar__element">Feed</li>
    </Link>
    <Link href="/post" passHref>
      <li className="navbar__element">Post</li>
    </Link>
  </ul>
);

export default Header;
