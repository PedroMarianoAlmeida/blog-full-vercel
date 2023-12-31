"use server";
import { Session } from "next-auth";
import { sql } from "@vercel/postgres";

import { getUserId } from "./authServices";

interface Post {
  title: string;
  content: string;
}

export const createPost = async (post: Post, session: Session) => {
  const userId = await getUserId(session);
  const { title, content } = post;

  try {
    const { rowCount } =
      await sql`INSERT INTO posts (postUserID, postTitle, body) VALUES (${userId}, ${title}, ${content});`;
    if (rowCount === 0) throw new Error("Post not created");
    return { success: true };
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;

    return { success: false, message };
  }
};

export const getLastFivePosts = async () => {
  try {
    const { rows } =
      await sql`SELECT * FROM posts ORDER BY postID DESC LIMIT 5;`;
    return { success: true, posts: rows };
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;

    return { success: false, message };
  }
};

export const getPostById = async (id: string) => {
  try {
    const { rows } = await sql`SELECT * FROM posts WHERE postID = ${id};`;
    return { success: true, post: rows[0] };
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;

    return { success: false, message };
  }
};
