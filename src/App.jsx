
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'

function App() {
const myroute =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)

  return (
    <>
      <RouterProvider router={myroute}/>
    </>
  )
}

export default App
