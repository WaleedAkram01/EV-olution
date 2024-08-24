// To link  css file with BackGround Componenet.
import "./Background.css";
import React from "react";
//Now we will import the videos and images that we want in our backGround.
import Video1 from "/src/assets/video1.mp4";
import Image1 from "/src/assets/image1.png";
import Image2 from "/src/assets/image2.png";
import Image3 from "/src/assets/image3.png";

function Background({ playStatus, heroCount }) {
  // Remember this is CONDITIONAL RENDERING CONCEPT.
  //If playStatus is true we will return video tag.
  if (playStatus) {
    return (
      <video className="background" loop muted autoPlay>
        <source src={Video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={Image1} alt="" className="background" />;
  } else if (heroCount === 1) {
    return <img src={Image2} alt="" className="background" />;
  } else if (heroCount === 2) {
    return <img src={Image3} alt="" className="background" />;
  }
}

export default Background;
