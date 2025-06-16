// src/App.js
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ensenanzaImg from './assets/images/ensenanza.jpeg';
import ensenanzaVid from './assets/videos/ensenanza.mp4';

function App() {
  return (
    <>
      <Header />
      <Section
        titulo="Enseñanza y su concepto"
        descripcion="La enseñanza es el proceso mediante el cual se facilita el aprendizaje."
        imagen={ensenanzaImg}
        video={ensenanzaVid}
      />
      {/* Aquí irían más <Section /> con otros datos */}
    </>
  );
}

export default App;
