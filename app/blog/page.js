import Link from "next/link";

export default async function Blog() {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts");
  let res = await req.json();
  res = res.slice(0, 5);
  return (
    <div className="containor">
      <section className="blogs">
        {res.map((blog, index) => {
          return (
            <article key={index}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
              <p>{blog.body}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
