import dbConnect from "../../../../utils/database";
import User from "../../../../model/userForm";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const reqParams = req.url.split("/");

  const userId = reqParams[reqParams.length - 1];

  const user = await User.findOne({ userId }).exec();

  if (user) {
    const path = user.path;
    const location = user.location;
    return NextResponse.json({ path, location }, { status: 200 });
  } else {
    console.log("User not found");
    return NextResponse.json({ message: "User not found!" }, { status: 404 });
  }
}
