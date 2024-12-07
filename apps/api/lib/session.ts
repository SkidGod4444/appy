import { auth } from "@repo/auth";
import { headers } from "next/headers";


export const getSession = async (req: Request) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return session;
};