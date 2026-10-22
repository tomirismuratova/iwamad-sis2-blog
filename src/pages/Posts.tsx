import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Posts() {
  return (
    <main className="posts-page">
      <div className="section-heading">
        <span className="eyebrow">
          THE JOURNAL
        </span>

        <h1>Stories & Ideas</h1>

        <p>
          Thoughts on design, architecture and
          everything that inspires creativity.
        </p>
      </div>

      <section className="posts-grid">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </section>
    </main>
  )
}