const PostContent = ({ post }: { post: any }) => {
  const { posttitle, body } = post;

  return (
    <div>
      <h2>{posttitle}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostContent;
