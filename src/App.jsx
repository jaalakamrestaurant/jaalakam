import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import DeliveryPromo from './components/DeliveryPromo';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Gallery />
            <Story />
            <Location />
          </>
        ) : (
          <DeliveryPromo />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
