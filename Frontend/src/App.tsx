import { Outlet } from 'react-router'
import Navbar from './components/layout/common/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Toaster />
      <Outlet />
    </div>
  )
}

export default App
