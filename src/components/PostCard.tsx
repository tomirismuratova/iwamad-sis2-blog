import { useState } from 'react'
import { Link } from 'react-router'
import type { BlogPost } from '../data/posts'

type PostCardProps = {
  post: BlogPost
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="post-card">
      <div className="post-image">
        <img
          src={post.image}
          alt={post.title}
        />
      </div>

      <div className="post-content">
        <span className="post-category">
          {post.category}
        </span>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>
        <Link to={`/posts/${post.id}`} className="read-more">
          Read More →
        </Link>

        <div className="post-footer">
          <span>{post.date}</span>

          <button
            type="button"
            className="like-button"
            aria-pressed={liked}
            onClick={() => setLiked(!liked)}
          >
            {liked ? '♥ Liked' : '♡ Like'}
          </button>
        </div>
      </div>
    </article>
  )
}
