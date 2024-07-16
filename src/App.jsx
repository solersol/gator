
import { Hero, About, Roadmap2, About2, Tokenomics } from "./sections";
// import VideoBackground from "./components/VideoBackground";
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Separator from "./components/Separator";
import StickyFooter from "./sections/StickyFooter";
import Chart from "./sections/Chart";
import LoadingScreen from "./components/LoadingScreen"; // Import the loading screen

// Import the background image
import bgImage from './assets/images/main.png';
import rdImage from './assets/images/roadmap2.png';
// import { bg3 } from "./assets/images";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set the loading time to 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
return(
  <main className="relative bg-[#a7a7c5]">
    <Nav />
   

    <section className="xl:padding-l wide:padding-r padding-b bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <Hero />
    </section>
    <Separator />

    {/* <VideoBackground >
      <Hero />
    </ VideoBackground > */}
    <section className="padding pt-10">    <Tokenomics />    </section>
    <Separator />
    <section className="w-full h-screen bg-cover bg-center " style={{ backgroundImage: `url(${rdImage})` }}><Roadmap2 /></section>
    <Separator />
    <section className="padding " ><About /></section>
    
    <section className="padding"><Chart /></section>
   
    <section className=""><StickyFooter /></section>
  </main>
);
};

export default App;
