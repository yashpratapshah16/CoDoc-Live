"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();
  const org_id: {
    id: string;
  } = sessionClaims?.o as { id: string };

  const response = await clerk.users.getUserList({
    organizationId: [org_id.id],
  });

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress.split("@")[0] ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
