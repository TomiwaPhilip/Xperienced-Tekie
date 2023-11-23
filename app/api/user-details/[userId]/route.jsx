import dbConnect from "../../../../utils/database";
import User from "../../../../model/userForm";
import { NextResponse } from "next/server";

export async function GET(req) {
  await dbConnect();

  const reqParams = req.url.split("/");
  //   const { searchParams } = new URL(req.url);
  //   const param = searchParams.get("userId");
  const userId = reqParams[reqParams.length - 1];
  //   console.log(userId);

  //   const users = await User.find({});
  //   const user = await User.findOne({ userId }).in("users");
  const user = await User.findOne({ userId }).exec();

  if (user) {
    const path = user.path;
    // return NextResponse(JSON.stringify({ path }), { status: 200 });
    return NextResponse.json({ path }, { status: 200 });
  } else {
    console.log("User not found");
    return NextResponse.json({ message: "User not found!" }, { status: 404 });
  }
}
