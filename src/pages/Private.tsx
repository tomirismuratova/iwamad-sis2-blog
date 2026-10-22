type PrivateProps = {
  onSignOut: () => void
}

export default function Private({
  onSignOut,
}: PrivateProps) {
  return (
    <main className="private-page">
      <span className="eyebrow">PRIVATE SPACE</span>

      <h1>My Creative Workspace</h1>

      <p>Welcome to my private collection of ideas.</p>

      <button
        type="button"
        className="primary-button"
        onClick={onSignOut}
      >
        Sign Out →
      </button>
    </main>
  )
}