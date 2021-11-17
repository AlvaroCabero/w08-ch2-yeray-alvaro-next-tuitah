import Link from "next/Link";

const Header = () => {
  return (
    <ul className="navbar">
      <Link href="/">
        <li className="navbar__element">Feed</li>
      </Link>
      <Link href="/post">
        <li className="navbar__element">Post</li>
      </Link>
    </ul>
  );
};

export default Header;
