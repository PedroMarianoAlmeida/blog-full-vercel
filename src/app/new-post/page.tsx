import { canUserCreatePostChecker } from "@/services/authServices";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const canUserCreatePost = await canUserCreatePostChecker();

  if (!canUserCreatePost) {
    redirect("/");
  }

  return (
    <div>
      <h2>Create Post Form</h2>
    </div>
  );
}
