"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // success toast
  function successToast(message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  // error toast
  function errorToast(message) {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  // submit
  const submit = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      body: JSON.stringify({ title, body }),
    });
    const res = await req.json();
    if (req.status === 201) {
      successToast("blog posted");
      setTitle("");
      setBody("");
    } else {
      errorToast(res);
    }
  };
  return (
    <div className="containor">
      <form onSubmit={submit} className="create_form">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="title"
          value={title}
        />
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="body"
          value={body}
        ></textarea>
        <button>Post</button>
      </form>
    </div>
  );
}
