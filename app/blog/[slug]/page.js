export default async function Slug({ params }) {
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const res = await req.json();
  return (
    <section className="containor blog">
      <h1>{res.title}</h1>
      <p>{res.body}</p>
    </section>
  );
}
