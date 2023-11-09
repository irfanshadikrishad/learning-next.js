export default function Slug({ params }) {
  return (
    <section className="container">
      <h1>{params.slug}</h1>
    </section>
  );
}
