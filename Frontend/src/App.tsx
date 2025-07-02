import { Outlet } from 'react-router'
import Navbar from './components/layout/common/Navbar'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
