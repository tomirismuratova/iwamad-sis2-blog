import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProtectedRoute from '../components/ProtectedRoute'

it('restricts access to protected content', () => {
  render(
    <ProtectedRoute>
      <h1>Secret Content</h1>
    </ProtectedRoute>
  )

  expect(
    screen.getByText('Protected Page')
  ).toBeInTheDocument()

  expect(
    screen.queryByText('Secret Content')
  ).not.toBeInTheDocument()
})