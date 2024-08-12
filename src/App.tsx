import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepages from './pages/Homepages'
import SsoPortal from './pages/SsoPortal'
import MultiFactorAuth from './pages/MultiFactorAuth'
import GetInTouch from './pages/GetInTouch'
import { routes } from './routes'
import DefaultLayout from './components/DefaultLayout'
function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepages />} />
          <Route path={routes.SSOPORTAL} element={<SsoPortal />} />
          <Route path={routes.MULTIFACTORAUTH} element={<MultiFactorAuth />} />
          <Route path={routes.GETINTOUCH} element={<GetInTouch />} />
        </Route>
      </Routes>
      </>
  )
}

export default App
