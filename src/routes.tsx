import { Routes, Route } from 'react-router-dom'
import Error404 from './pages/404/404'
import { Home } from './pages/pages'

const AppRouter = () => (
  <Routes>
    <Route path='*' element={<Error404/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
)


export default AppRouter