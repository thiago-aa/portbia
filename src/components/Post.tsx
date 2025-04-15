interface PostProps {
  post: any;
}

export default function Post(props: PostProps) {
  const { post } = props;
  const { src, id } = post;

  return (
    <div>
      <img src={src} alt={`Post ${id}`} />
    </div>
  )
}