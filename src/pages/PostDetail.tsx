import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'

export default function PostDetail() {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <main>
        <h1>Post Not Found</h1>
        <Link to="/posts">Back to Posts</Link>
      </main>
    )
  }

  return (
    <main className="post-detail">
      <Link to="/posts">← All Posts</Link>
      <p className="eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </main>
  )
}