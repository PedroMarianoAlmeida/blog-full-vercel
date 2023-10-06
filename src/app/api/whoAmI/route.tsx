import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authoptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authoptions);

  return NextResponse.json({ name: session?.user?.name ?? "Not Logged In" });
}
