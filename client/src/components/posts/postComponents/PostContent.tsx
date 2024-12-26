const PostContent = ({
  text,
  imagePath,
}: {
  text: string;
  imagePath?: string;
}) => {
  return (
    <>
      <p className="text-md">{text}</p>
      {imagePath ? (
        <img
          src={imagePath}
          className="min-w-[25%] max-w-[55%] border-l border-b border-neutral-700"
        />
      ) : null}
    </>
  );
};
export default PostContent;
