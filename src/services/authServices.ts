import { getServerSession } from "next-auth";
import { sql } from "@vercel/postgres";

export const canUserCreatePostChecker = async () => {
  const session = await getServerSession();
  if (session?.user?.email === "") return false;

  const { rows } =
    await sql`SELECT * FROM postUsers WHERE email = ${session?.user?.email}`;

  if (rows.length === 0) return false;
  return rows[0].cancreateposts;
};
