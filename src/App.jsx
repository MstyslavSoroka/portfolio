import { Routes, Route, Navigate } from 'react-router-dom';
import '@fontsource/jetbrains-mono';
import '@fontsource/space-grotesk';
import '@fontsource/jetbrains-mono/800.css';
import '@fontsource/space-grotesk/700.css';
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Preloader from './components/Loader';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" replace />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
