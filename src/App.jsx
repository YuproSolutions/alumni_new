import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AuthModal from "./components/AuthModal/AuthModal";
import About from "./components/About/About";
import AlumniDirectory from "./components/AlumniDirectory/AlumniDirectory";
import News from "./components/News/News";
import Articles from "./components/Articles/Articles";
import Resources from "./components/Resources/Resources";
import Event from "./components/Event/Event";

function App() {

  const [authMode, setAuthMode] = useState(null);

  const handleAuthOpen = (mode) => {
    setAuthMode(mode);
  };

  const handleClose = () => {
    setAuthMode(null);
  };

  return (
    <>
      <Header onAuthOpen={handleAuthOpen} />
      {/* Home Section */}
      <section id="home">
        <Hero onAuthOpen={handleAuthOpen} />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      <section id="directory">
        <AlumniDirectory />
      </section>

      <section id="news">
        <News />
      </section>

      <section id="articles">
        <Articles />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="event">
        <Event />
      </section>
      

      <AuthModal
        mode={authMode}
        onClose={handleClose}
        onModeChange={handleAuthOpen}
      />

      
    </>
  );
}

export default App;