import { Link } from 'react-router'
import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">
            A PERSONAL CREATIVE JOURNAL
          </span>

          <h1>
            Ideas that
            <br />
            <em>inspire.</em>
          </h1>

          <p>
            Exploring the intersection of design,
            architecture and everyday creativity.
            Welcome to my creative journal.
          </p>

          <Link
            to="/posts"
            className="primary-button"
          >
            Explore the Journal →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
            alt="Contemporary interior architecture"
          />
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-heading">
          <div>
            <span className="eyebrow">
              FROM THE JOURNAL
            </span>

            <h2>Latest Stories</h2>
          </div>

          <Link to="/posts">
            View all posts →
          </Link>
        </div>

        <div className="posts-grid">
          {posts.slice(0, 3).map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>
    </main>
  )
}