import React from "react";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

const page = () => {
  const { userId } = auth();
  console.log(userId);

  const user = getUserById(userId as string);

  console.log("user", user);
  console.log("userId", userId);

  return <div>Test</div>;
};

export default page;
