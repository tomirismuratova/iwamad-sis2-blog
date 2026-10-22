import { Routes, Route, NavLink } from 'react-router'

import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import PostDetail from './pages/PostDetail'
import Private from './pages/Private'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

function App() {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <Private />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App