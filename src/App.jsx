import { Route, Routes } from 'react-router-dom'
import { Shell } from './components/layout'
import { HomePage, TeamPage, EventsPage } from './pages'
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Route>
    </Routes>
  )
}