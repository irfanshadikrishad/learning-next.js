"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="container">
      <h1>This is about page.</h1>
      <button
        className="dashboard_btn"
        onClick={() => {
          router.push("/dashboard");
        }}
      >
        router.push(/dashboard)
      </button>
    </div>
  );
}
