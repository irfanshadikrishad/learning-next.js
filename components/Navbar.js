"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="containor">
        <div className="navBtns">
          <Link className={pathname === "/" ? "active" : ""} href="/">
            Home
          </Link>
          <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
            Blog
          </Link>
          <Link
            className={pathname === "/create" ? "active" : ""}
            href="/create"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}
