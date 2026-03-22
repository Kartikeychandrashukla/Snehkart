import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Dialog from './components/Dialog';
const App: React.FC = () => {

  const[dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
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
