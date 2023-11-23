// import { clerkClient } from "@clerk/nextjs";

import dbConnect from "../../../utils/database";
import User from "../../../model/userForm";

export async function GET(req) {
  await dbConnect();

  //   const { searchParams } = new URL(req.url);
  //   const param = searchParams.get("userId");
  // console.log(req.url);

  //   console.log(request.query);

  // const users = await User.find({});
  //   const user = await User.findOne({ userId: req.query }).in("users");
  //   const user = await User.findOne({ userId: request.query.params }).exec();

  // const users = await clerkClient.users.getUserList();

  return Response.json({ users });
}

export async function POST(req) {
  await dbConnect();

  //   const { searchParams } = new URL(req.url);
  //   const param = searchParams.get("userId");
  // console.log(JSON.stringify(req.body));

  //   console.log(request.query);

  // const users = await User.find({});
  //   const user = await User.findOne({ userId: req.query }).in("users");
  //   const user = await User.findOne({ userId: request.query.params }).exec();

  // return Response.json({ message: "done" });
  return Response.json(users);
}
