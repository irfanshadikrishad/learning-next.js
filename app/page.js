import home from "./home.module.css"; // css module

export default function Home() {
  return (
    <div className={home.container}>
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
