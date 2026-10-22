import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'
import ProtectedRoute from '../components/ProtectedRoute'

it('redirects signed-out users to Sign In', () => {
  render(
    <MemoryRouter initialEntries={['/private']}>
      <Routes>
        <Route
          path="/signin"
          element={<h1>Sign In</h1>}
        />

        <Route
          element={<ProtectedRoute isSignedIn={false} />}
        >
          <Route
            path="/private"
            element={<h1>Secret Content</h1>}
          />
        </Route>
      </Routes>
    </MemoryRouter>
  )

  expect(
    screen.getByRole('heading', { name: 'Sign In' })
  ).toBeInTheDocument()

  expect(
    screen.queryByText('Secret Content')
  ).not.toBeInTheDocument()
})