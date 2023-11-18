"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

// blog fetching
export default function Blog() {
  const [bloog, setBloog] = useState([]);
  async function blogs() {
    const res = await fetch("http://localhost:3000/api/blog", {
      cache: "no-store",
    });
    const data = await res.json();
    setBloog(data);
  }
  // delete
  const deleteIt = async (ID) => {
    const req = await fetch("http://localhost:3000/api/blog", {
      method: "DELETE",
      body: JSON.stringify({ ID }),
    });
    const res = await req.json();
    if (req.status === 200) {
      await blogs();
      console.log(res.success, ID);
    } else {
      console.log(res.error);
    }
  };
  useEffect(() => {
    blogs();
  }, [setBloog]);
  return (
    <div className="containor">
      <div className="blogs">
        {bloog.map((blog, i) => {
          return (
            <article key={i}>
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
              <div className="article_actions">
                <Link href={`/edit/${blog._id}`}>{<FiEdit />}</Link>
                <button
                  onClick={() => {
                    deleteIt(String(blog._id));
                  }}
                >
                  {<TiDeleteOutline />}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
