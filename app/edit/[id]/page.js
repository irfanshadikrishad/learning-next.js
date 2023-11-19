"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlobProperty({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // update function
  const update = async (e) => {
    e.preventDefault();
    const req = await fetch("/api/blog", {
      method: "PATCH",
      body: JSON.stringify({ id: params.id, title, body }),
    });
    const res = await req.json();
    if (req.status === 200) {
      router.push("/blog");
    } else {
      console.log(res.error);
    }
  };
  useEffect(() => {
    async function getTitleBody() {
      const req = await fetch("/api/edit", {
        method: "POST",
        body: JSON.stringify({ id: params.id }),
      });
      const res = await req.json();
      setTitle(res.success.title);
      setBody(res.success.body);
      return res;
    }
    // fetch current values
    getTitleBody();
  }, [params.id]);
  return (
    <div className="containor">
      <form className="create_form">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="title"
          defaultValue={title}
        />
        <input
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="body"
          defaultValue={body}
        />
        <button onClick={update} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
