import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Dialog from './components/Dialog';
const App: React.FC = () => {

  const[dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      <div className="homeBg" aria-hidden="true">
        <div className="homeBgOrb homeBgOrb1" />
        <div className="homeBgOrb homeBgOrb2" />
        <div className="homeBgOrb homeBgOrb3" />
        <div className="homeBgOrb homeBgOrb4" />
        <div className="homeBgGrid" />
        <div className="homeBgRing homeBgRing1" />
        <div className="homeBgRing homeBgRing2" />
        <div className="homeBgLine homeBgLine1" />
        <div className="homeBgLine homeBgLine2" />
        <div className="homeBgLine homeBgLine3" />
        <div className="homeBgDot homeBgDot1" />
        <div className="homeBgDot homeBgDot2" />
        <div className="homeBgDot homeBgDot3" />
        <div className="homeBgDot homeBgDot4" />
        <div className="homeBgDot homeBgDot5" />
      </div>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Hero />
      </main>
      <Footer close={(val) => setDialogOpen(val)} />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};

export default App;
