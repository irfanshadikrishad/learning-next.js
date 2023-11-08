import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navigations">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
