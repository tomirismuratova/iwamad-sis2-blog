import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'

import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

describe('PostCard', () => {
  it('renders the blog post title', () => {
    render(
      <MemoryRouter>
        <PostCard post={posts[0]} />
      </MemoryRouter>
    )

    expect(
      screen.getByText(posts[0].title)
    ).toBeInTheDocument()
  })

  it('changes the like state when clicked', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <PostCard post={posts[0]} />
      </MemoryRouter>
    )

    const button = screen.getByRole('button', {
      name: /like/i,
    })

    expect(button).toHaveAttribute('aria-pressed', 'false')

    await user.click(button)

    expect(button).toHaveAttribute('aria-pressed', 'true')
  })
})