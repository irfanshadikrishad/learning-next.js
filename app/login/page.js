"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function Submit(e) {
    e.preventDefault();
    const request = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const response = await request.json();
    if (request.status === 200) {
      router.push("/");
    } else {
      console.log(response.error);
    }
  }
  return (
    <section className="containor">
      <form onSubmit={Submit} className="form_register">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
          value={username}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          value={password}
        />
        <button>Register</button>
      </form>
    </section>
  );
}
