import './App.css'
import Navbar from './components/Navbar/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Footer/Footer';
import CarouselBootstrap from './components/Carousel/Carousel';
import Chatbot from './components/chatbot';
function App() {


  return (
    <>
      <Navbar />
      <CarouselBootstrap/>
      <Chatbot/>
      <Aboutus />
      <Footer /> 
    </>
  );
}

export default App