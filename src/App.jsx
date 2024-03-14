
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className='wrapper  flex flex-col overflow-hidden'>
       <NavBar />
       <Hero />
       <Footer />
      </div>
    </>
  )
}

export default App
