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
          <Link className={pathname === "/login" ? "active" : ""} href="/login">
            Login
          </Link>
          <Link
            className={pathname === "/register" ? "active" : ""}
            href="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
