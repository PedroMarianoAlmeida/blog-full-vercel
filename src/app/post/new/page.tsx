import CreatePostForm from "@/components/CreatePostForm";
import { canUserCreatePostChecker } from "@/services/authServices";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const canUserCreatePost = await canUserCreatePostChecker();

  if (!canUserCreatePost) {
    redirect("/");
  }

  return (
    <div>
     <CreatePostForm />
    </div>
  );
}
