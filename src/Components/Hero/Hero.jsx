import React from "react";
import "./Hero.css";
// Now we will import pause icon and play icon & arrow button from assets.
import arrow_btn from "/src/assets/arrow_btn.png";
import play_icon from "/src/assets/play_icon.png";
import pause_icon from "/src/assets/pause_icon.png";
function Hero({
  setPlayStatus,
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
}) {
  return (
    <div className="hero">
      <div className="hero-text">
        {/* In this p tag we will display the text of HeroData tat we have created in app.jsx file
        In first p tag we will add text1 and In second p tag we will add text2.*/}
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      {/* Now creating another div.*/}
      <div className="hero-explore">
        <p>Explore the features.</p>
        <img src={arrow_btn} alt="" />
      </div>
      {/* Now In this div we will have three li tags and we will use these li tags  as dots.*/}
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {/* Here in li tags we will add dynamic className*/}
          {/* Wht I have understand is that which count image would be displaying then its dot would be orange otherwise other  color*/}
          {/* Now we will create an arrow function....when we will click on first li tag it will set Hero count to zero and that image would display and vise verse.*/}
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          {/* In this SRC we will provide conditional image  therefore use ternary operator if the playStatus is true if the video is playing we will provid pause icon
          & if video is paused we will provide play icon*/}
          {/* Further use Onclick function if setPlayStatus is paused we will set it to true ...if it is true then we will do false. */}
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See The Video </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
