import database from "@/utils/database";
import User from "@/models/user-model";
import { NextResponse } from "next/server";
import { hashSync, genSaltSync } from "bcryptjs";
import { config } from "dotenv";
config();

export async function POST(request) {
  try {
    await database();
    const { username, email, password } = await request.json();
    const salt = genSaltSync(Number(process.env.SALT));
    const hashedPassword = hashSync(password, salt);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();
    return NextResponse.json({ success: savedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
