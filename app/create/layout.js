"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateLayout({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
