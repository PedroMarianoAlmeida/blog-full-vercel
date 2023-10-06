"use client";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //TODO: add image

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, content });
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;
