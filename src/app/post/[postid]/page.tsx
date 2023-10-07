import PostContent from "@/components/PostContent";
import { getPostById } from "@/services/blogService";

const PostPage = async ({
  params: { postid },
}: {
  params: { postid: string };
}) => {
  const res = await getPostById(postid);

  return (
    <>
      <h2>Post Page</h2>
      {res.success ? (
        <PostContent post={res.post} />
      ) : (
        <h2>Error loading post</h2>
      )}
    </>
  );
};

export default PostPage;
