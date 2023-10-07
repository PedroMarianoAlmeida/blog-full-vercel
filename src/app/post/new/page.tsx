import CreatePostForm from "@/components/CreatePostForm";
import { canUserCreatePostChecker } from "@/services/authServices";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const canUserCreatePost = await canUserCreatePostChecker();

  if (!canUserCreatePost) {
    return (
      <div>
        <h2>You cannot create a post</h2>
        <p>
          Ask to the administration on{" "}
          <Link href="https://www.linkedin.com/in/pedroprogrammer/">
            <span className="text-orange-500">Linkedin</span>
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <CreatePostForm />
    </div>
  );
}
