import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" replace />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
