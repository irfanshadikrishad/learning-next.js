import User from "@/models/user-model";
import { compareSync } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    const user = await User.findOne({ username });
    const isVerified = compareSync(password, user.password);
    if (user && isVerified) {
      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ error: "Invalid Credentials!" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid Credentials!" });
  }
}
