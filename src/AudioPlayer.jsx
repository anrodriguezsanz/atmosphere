import rainImg from './assets/img/rain.jpg';
import snowImg from './assets/img/snow.jpg';
import forestImg from './assets/img/forest.jpg';
import oceanImg from './assets/img/ocean.jpg';
import siestaImg from './assets/img/siesta.jpg';
import veniceImg from './assets/img/venice.jpg';
import parisImg from './assets/img/paris.jpg';
import japanImg from './assets/img/japan.jpg';

import rainAudio from './assets/audio/rain.ogg';
import forestAudio from './assets/audio/forest.ogg';
import snowAudio from './assets/audio/snow.ogg';
import oceanAudio from './assets/audio/ocean.ogg';
import siestaAudio from './assets/audio/siesta.ogg';
import gondolasAudio from './assets/audio/gondolas.ogg';
import parisAudio from './assets/audio/paris.ogg';
import japanAudio from './assets/audio/japan.ogg';

import { useEffect, useRef } from 'react';

// Map images to their corresponding audio files
const atmosphereSounds = {
    [rainImg]: rainAudio,
    [snowImg]: snowAudio,
    [forestImg]: forestAudio,
    [oceanImg]: oceanAudio,
    [siestaImg]: siestaAudio,
    [veniceImg]: gondolasAudio,
    [parisImg]: parisAudio,
    [japanImg]: japanAudio
};

export default function AudioPlayer({ selectedImage, isActive }) {

    const audioRef = useRef(new Audio());

    useEffect(() => {
        const audio = audioRef.current;

        if (isActive && selectedImage) {
            // If the session is active and an image is selected, play the corresponding audio
            audio.src = atmosphereSounds[selectedImage];
            audio.loop = true;
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        } else {
            // If the session is not active or no image is selected, pause the audio
            audio.pause();
        }
        return () => {
            // Cleanup the audio
            audio.pause();
        };
    }, [selectedImage, isActive]);

    // This component does not render any HTML
    return null;
}