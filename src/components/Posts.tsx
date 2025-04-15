import styles from '@/styles/Posts.module.css'
import PostsCarrousel from './PostsCarrousel';

interface PostsProps {
 posts: any[];
}

export default function Posts(props: PostsProps) {
  const { posts } = props;
  return (  
    <section className={styles.postsContainer} id="posts">
      <h2>Posts</h2>
      <PostsCarrousel posts={posts}/>
    </section>
  )
}