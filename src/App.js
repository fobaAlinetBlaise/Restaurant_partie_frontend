import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Plat from './components/Plat';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/plat" element={<Plat />} />
           <Route path="/about" element={<About />} />
           <Route path="/home" element={<Home />} />
         </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
