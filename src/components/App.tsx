import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

export default function App() {
  return (
    <div className="bg-darkBlue text-gold">
      <Header />
      <Main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}
