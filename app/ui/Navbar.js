"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="containor">
        <div className="navigations">
          <Link className={pathname === "/" ? "active" : ""} href="/">
            Home
          </Link>
          <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
            Blog
          </Link>
          <Link className={pathname === "/about" ? "active" : ""} href="/about">
            About
          </Link>
          <Link
            className={pathname === "/contact" ? "active" : ""}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
