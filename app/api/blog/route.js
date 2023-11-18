import { NextResponse } from "next/server";
import database from "@/utils/database";
import Blog from "@/models/blog-model";

export async function POST(request) {
  try {
    const { title, body } = await request.json();
    await database();
    const blog = await new Blog({ title, body });
    await blog.save();
    return NextResponse.json({ success: "blog posted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(request) {
  try {
    await database();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { ID } = await request.json();
    await Blog.findByIdAndDelete(ID);
    return NextResponse.json({ success: "deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
