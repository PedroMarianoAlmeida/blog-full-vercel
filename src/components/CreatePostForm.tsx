"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { createPost } from "@/services/blogService";

const CreatePostForm = () => {
  const { data: session } = useSession();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //TODO: add image
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (session?.user?.name === undefined) return;
    setLoading(true);
    try {
      const res = await createPost({ title, content }, session);
      if (res.success) {
        setTitle("");
        setContent("");
        setMessage("Post created successfully");
      } else {
        throw new Error("Error creating post");
      }
    } catch (error) {
      setMessage("Post failed to create");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black"
      />

      <textarea
        placeholder="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="text-black"
      />
      <button
        type="submit"
        disabled={loading || title === "" || content === ""}
      >
        Submit
      </button>
      <p>{message}</p>
    </form>
  );
};

export default CreatePostForm;
