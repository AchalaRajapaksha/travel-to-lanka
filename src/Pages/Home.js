import React from 'react'
import Navigationbar from '../Components/Navigationbar'
import "./Home.css";


export default function Home() {
  return (
    <div>
      <Navigationbar />
      <div className="welcome">
        <h2>
          Discover the Magic of Sri Lanka with <b> "Travel to Lanka"!</b>
        </h2>
        <p>
          Welcome to "Travel to Lanka," your ultimate guide to exploring the
          breathtaking beauty and hidden gems of Sri Lanka! Embark on a journey
          through lush landscapes, pristine beaches, ancient temples, and
          vibrant culture. Whether you're an adventure seeker, a history
          enthusiast, or a nature lover, Sri Lanka has something extraordinary
          for everyone. Plan your next unforgettable tour with us and experience
          the wonders of Sri Lanka. From the majestic elephants of Minneriya
          National Park to the serene beaches of Mirissa, and the mystical ruins
          of Sigiriya, let "Travel to Lanka" be your gateway to an enchanting
          paradise. Join us and create memories that will last a lifetime. Your
          adventure in Sri Lanka awaits!
        </p>
        <div className="images-wrapper">
          <div className="images-2">
            <img src="./images/sigiriya.jpeg" alt="Sigiriya" />
            <img src="./images/beach.jpg" alt="beach" />
          </div>
          <div className="images-2">
            <img src="./images/dambulla.jpg" alt="dambulla" />
            <img src="./images/elephant.jpg" alt="elephant" />
          </div>
        </div>
      </div>
    </div>
  );
}
