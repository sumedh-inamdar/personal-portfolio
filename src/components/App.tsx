import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFirebaseConfig } from '../firebase-config';
import { getAnalytics } from 'firebase/analytics';

export default function App() {
  return (
    <div>
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

const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
