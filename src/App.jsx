import './App.css'
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default App
