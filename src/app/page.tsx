import { getLastFivePosts } from "@/services/blogService";

export const dynamic = "force-dynamic";
export default async function Home() {
  const recentPosts = await getLastFivePosts();

  if (recentPosts.success) {
    return (
      <>
        <h2>Recent Posts</h2>
        <ul>
          {recentPosts?.posts?.map((post) => {
            const { postid, posttitle } = post;
            return (
              <li key={postid} className="text-orange-600">
                {posttitle}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return <h2>Error loading posts</h2>;
}
