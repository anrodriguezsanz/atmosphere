import { useState, useEffect } from 'react';
import './App.css'

import rainImg from './assets/img/rain.jpg';
import snowImg from './assets/img/snow.jpg';
import forestImg from './assets/img/forest.jpg';
import oceanImg from './assets/img/ocean.jpg';
import siestaImg from './assets/img/siesta.jpg';
import veniceImg from './assets/img/venice.jpg';
import parisImg from './assets/img/paris.jpg';
import japanImg from './assets/img/japan.jpg';

import AudioPlayer from './AudioPlayer';
import SetupView from './SetupView';
import FocusView from './FocusView';

const IMAGES = { snowImg, rainImg, forestImg, oceanImg, siestaImg, veniceImg, parisImg, japanImg };

function App() {

  // Function to handle duration change from SetupView
  const handleDurationChange = minutes => {
    setSelectedDuration(minutes);
    setSecondsLeft(minutes * 60);
  };

  // Global states
  const [selectedDuration, setSelectedDuration] = useState(15);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(selectedDuration * 60);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      // If active, start the countdown
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      // When timer reaches zero, stop the session and reset
      setIsActive(false);
      setSecondsLeft(selectedDuration * 60);
    }
    // Cleanup the interval
    return () => clearInterval(interval);
  }, [isActive, secondsLeft, selectedDuration]);

  return (

    <div className="app-container" style={{
      backgroundImage: isActive && selectedImage ? `url(${selectedImage})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <AudioPlayer selectedImage={selectedImage} isActive={isActive} />
      {!isActive ? (
        <SetupView
          IMAGES={IMAGES}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedDuration={selectedDuration}
          onDurationChange={handleDurationChange}
          onStart={() => setIsActive(true)} >
        </SetupView>
      ) : (
        <FocusView
          secondsLeft={secondsLeft}
          onStop={() => {
            setIsActive(false); 
            setSecondsLeft(selectedDuration * 60); 
          }}>
        </FocusView>
      )
      }
    </div >
  )
}

export default App
