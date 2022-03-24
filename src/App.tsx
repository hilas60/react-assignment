import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { GalleryRoute } from './routes/GalleryRoute/GalleryRoute'
import { PhotoRoute } from './routes/PhotoRoute/PhotoRoute'

import 'normalize.css'
import './App.scss'

function App () {
  return (
    <div className="App">
      <Link to="/">
        <img src="https://hunters-webapp-static-assets.s3.us-west-2.amazonaws.com/huntersLogoBlue.png" alt="Hunters" className="App__logo" />
      </Link>

      <Routes>
        <Route path="/" element={<GalleryRoute />} />
        <Route path="/photo/:id" element={<PhotoRoute />} />
        <Route path="/author/:id" element={<GalleryRoute />} />
      </Routes>
    </div>
  )
}

export default App
