import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/private">Private</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p>Creative Journal © 2026</p>
      </footer>
    </>
  )
}