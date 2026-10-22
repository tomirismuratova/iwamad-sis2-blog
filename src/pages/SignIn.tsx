import { Navigate } from 'react-router'

type SignInProps = {
  isSignedIn: boolean
  onSignIn: () => void
}

export default function SignIn({
  isSignedIn,
  onSignIn,
}: SignInProps) {
  if (isSignedIn) {
    return <Navigate to="/private" replace />
  }

  return (
    <main className="sign-in-page">
      <span className="eyebrow">MEMBER ACCESS</span>
      <h1>Sign In</h1>
      <p>Sign in to view your private creative workspace.</p>

      <button
        type="button"
        className="primary-button"
        onClick={onSignIn}
      >
        Sign In →
      </button>
    </main>
  )
}