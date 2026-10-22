import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router'

import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import Home from './pages/Home'
import Posts from './pages/Posts'
import Contact from './pages/Contact'
import PostDetail from './pages/PostDetail'
import Private from './pages/Private'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'

import './App.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()

  function handleSignIn() {
    setIsSignedIn(true)
    navigate('/private')
  }

  function handleSignOut() {
    setIsSignedIn(false)
    navigate('/signin')
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="posts" element={<Posts />} />

        <Route
          path="posts/:id"
          element={<PostDetail />}
        />

        <Route path="contact" element={<Contact />} />

        <Route
          path="signin"
          element={
            <SignIn
              isSignedIn={isSignedIn}
              onSignIn={handleSignIn}
            />
          }
        />

        <Route
          element={
            <ProtectedRoute isSignedIn={isSignedIn} />
          }
        >
          <Route
            path="private"
            element={<Private onSignOut={handleSignOut} />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App