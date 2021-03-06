import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Banner from './components/banner';
import Skill from './components/skills';
import Project from './components/project';
import Team from './components/team';
import ProgressBar from './components/progressBar';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    
    <div >
  
    <Navbar />
    <Banner />
    <Skill />
    <Project />
    <Team />
    <ProgressBar />
    <Contact />
    <Footer />
    
    </div>
  );
}

export default App;
