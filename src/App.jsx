import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Knihy from './pages/Knihy.jsx'
import Autori from './pages/Autori.jsx'
import OProjektu from './pages/OProjektu.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="knihy" element={<Knihy />} />
        <Route path="autori" element={<Autori />} />
        <Route path="o-projektu" element={<OProjektu />} />
      </Route>
    </Routes>
  )
}
