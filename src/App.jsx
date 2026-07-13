import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Knihy from './pages/Knihy.jsx'
import BookDetail from './pages/BookDetail.jsx'
import Autori from './pages/Autori.jsx'
import AuthorDetail from './pages/AuthorDetail.jsx'
import OProjektu from './pages/OProjektu.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="knihy" element={<Knihy />} />
        <Route path="knihy/:slug" element={<BookDetail />} />
        <Route path="autori" element={<Autori />} />
        <Route path="autori/:slug" element={<AuthorDetail />} />
        <Route path="o-projektu" element={<OProjektu />} />
      </Route>
    </Routes>
  )
}
