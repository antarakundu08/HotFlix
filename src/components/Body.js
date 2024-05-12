import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import MovieDetails from './MovieDetails'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/movie/:movieId',
            element: <MovieDetails/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body