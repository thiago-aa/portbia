import Post from './Post';
import styles from '@/styles/PostsCarrousel.module.css';

interface PostsCarrouselProps {
  posts: any[];
}

export default function PostsCarrousel(props: PostsCarrouselProps) {
  const { posts } = props;

  const duplicatedPosts = [...posts, ...posts]; // Duplicar posts para o carrossel

  return (
    <div className={styles.carrouselContainer}>
      {
        duplicatedPosts.map( (post, i) => <Post key={i} post={post}/> )
      }
    </div>
  )
}