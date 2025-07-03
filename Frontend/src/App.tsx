import { Outlet } from 'react-router'
import Navbar from './components/layout/common/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/layout/common/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Toaster />
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
