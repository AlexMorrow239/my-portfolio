import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Links from './components/Links';

function App() {
  return (
    <>
    <Routes>
      <Route path='/my-portfolio' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='links' element={<Links />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
