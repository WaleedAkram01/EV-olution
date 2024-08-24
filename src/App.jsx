import React, { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
function App() {
  // In heroData we will have three objects.
  //We  have three images for all three image swe have to display three different text.
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ];
  // Now we will create useState variable
  let [heroCount, setHeroCount] = useState(0);
  // This state variable is to play and pause the video.
  let [playStatus, setPlayStatus] = useState(false);

  // Now we want that image in the backGround should update after every 4 seconds for that:

  useEffect(() => {
    // Define the interval function
    const intervalId = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Here we will mount the BackGround Component and we will also pass the props.*/}
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
      <Navbar></Navbar>
      {/* In this Hero we will pass the props ....first we will pass setPlayStatus using this we can change the value either true or false.
       So the video in Our background we will be played or paused
       */}
      {/* Here we will pass every function and varible  */}
      <Hero
        setPlayStatus={setPlayStatus}
        // If heroCount is 0 we will display the first object and vise versa.
        //So,we will Use index number with heroData and  that is
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      ></Hero>
    </div>
  );
}
export default App;
