"use client";

export default function Error({ error, reset }) {
  return (
    <div className="container">
      <h2>Something went wrong!</h2>
      <button className="try-again" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
