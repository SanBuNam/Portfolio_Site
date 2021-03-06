import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link prefetch href="/index">
      <a>Home</a>
    </Link>
    <Link prefetch href="/skills">
      <a>Skills</a>
    </Link>
    <Link prefetch href="/resources">
      <a>Resources</a>
    </Link>
    <Link prefetch href="/blogs">
      <a>Blog</a>
    </Link>
    <Link prefetch href="/contact">
      <a>Resume</a>
    </Link>
  </NavStyles>
);

export default Nav;
