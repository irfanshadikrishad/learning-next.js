import { NextResponse } from "next/server";
import database from "@/utils/database";
import Blog from "@/models/blog-model";

export async function POST(request) {
  try {
    await database();
    const { id } = await request.json();
    const blog = await Blog.findById(id);
    return NextResponse.json({ success: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
