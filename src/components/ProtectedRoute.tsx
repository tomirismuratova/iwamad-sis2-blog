import { useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const [hasAccess, setHasAccess] = useState(false)

  if (!hasAccess) {
    return (
      <main>
        <h1>Protected Page</h1>
        <p>You need permission to view this page.</p>
        <button
          type="button"
          onClick={() => setHasAccess(true)}
        >
          Unlock Page
        </button>
      </main>
    )
  }

  return <>{children}</>
}