interface PageProps {
  params: Promise<{ userId: string; postId: string; commentId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { userId, postId, commentId } = await params;
  return (
    <div>
      <p>{userId}</p>
      <p>{postId}</p>
      <p>{commentId}</p>
    </div>
  );
};

export default Page;
