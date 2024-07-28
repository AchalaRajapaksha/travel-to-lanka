import React from "react";
import "./Home.css";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <div className="navigationbar-wrapper">
        <div className="navigationbar-logo-and-name">
          <div className="logo">
            <img src="./Logo.svg" alt="Logo" />
          </div>
          <h1>Travel to Lanka</h1>
        </div>
        <div className="navigationbar-buttons">
          <a href="#what-we-offer">
            <Button colorScheme="teal" variant="outline" size="sm">
              Destinations
            </Button>
          </a>
          <a href="#experience">
            <Button colorScheme="teal" variant="outline" size="sm">
              About us
            </Button>
          </a>
          <a href="#contact">
            <Button colorScheme="teal" variant="outline" size="sm">
              Contact us
            </Button>
          </a>
        </div>
      </div>

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
      <section id="experience"></section>
      <div className="experience-part-wrapper">
        <h2>Who We Are</h2>
        <p>
          At Travel to Lanka, we pride ourselves on providing unforgettable
          travel experiences for <b>over 14 years.</b> Our deep-rooted passion
          for showcasing the beauty and culture of Sri Lanka has made us a
          trusted name in the travel industry. With our extensive experience, we
          have successfully guided countless travelers, offering them an
          authentic and immersive experience of this stunning island nation. We
          offer a wide range of exciting destinations and activities to ensure
          that every moment of your journey is filled with wonder and adventure.
          <br />
          <br />
          Our carefully curated itineraries cover everything from serene beaches
          and lush tea plantations to ancient temples and bustling markets. Our
          commitment to exceptional service is reflected in the smiles and
          satisfaction of our travelers. The joy and excitement on the faces of
          our past customers, as seen in the photographs shared on our website,
          capture the essence of their unforgettable adventures with us. Join us
          at Travel to Lanka and let us help you create memories that will last
          a lifetime. With our in-depth knowledge and expertise, you can trust
          us to deliver a travel experience that exceeds your expectations.
          Discover the wonders of Sri Lanka with a team that knows it best.
        </p>

        <div className="images-wrapper">
          <div className="images-4">
            <img src="./images/img1.jpg" alt="image" />
            <img src="./images/img2.jpg" alt="image" />
            <img src="./images/img3.jpg" alt="image" />
            <img src="./images/img4.jpg" alt="image" />
          </div>
          <div className="images-4">
            <img src="./images/img5.jpg" alt="image" />
            <img src="./images/img6.jpg" alt="image" />
            <img src="./images/img7.jpg" alt="image" />
            <img src="./images/img8.jpg" alt="image" />
          </div>
        </div>
      </div>
      <section id="what-we-offer"></section>
      <div className="what-we-offer-wrapper">
        <h2>What we offer</h2>
        <p>
          At Travel to Lanka, we provide a diverse range of destinations and
          activities to ensure that every moment of your journey is filled with
          wonder and adventure. Here are some of the incredible places you can
          explore with us:
        </p>
        <ul>
          <li>
            <strong>Minneriya National Park</strong>: Witness the majestic
            elephants in their natural habitat.
          </li>
          <li>
            <strong>Mirissa</strong>: Relax on the serene beaches and enjoy
            whale watching.
          </li>
          <li>
            <strong>Sigiriya</strong>: Explore the mystical ruins of the ancient
            rock fortress.
          </li>
          <li>
            <strong>Kandy</strong>: Visit the sacred Temple of the Tooth and
            experience the vibrant cultural shows.
          </li>
          <li>
            <strong>Ella</strong>: Hike through lush tea plantations and enjoy
            breathtaking views.
          </li>
          <li>
            <strong>Galle</strong>: Wander through the historic Galle Fort and
            its charming streets.
          </li>
          <li>
            <strong>Yala National Park</strong>: Go on a thrilling safari to
            spot leopards, elephants, and other wildlife.
          </li>
          <li>
            <strong>Nuwara Eliya</strong>: Discover the beauty of "Little
            England" with its colonial architecture and tea estates.
          </li>
          <li>
            <strong>Polonnaruwa</strong>: Explore the ancient ruins of this
            former royal capital.
          </li>
          <li>
            <strong>Colombo</strong>: Experience the bustling city life with its
            mix of modernity and history.
          </li>
          <li>
            <strong>Anuradhapura</strong>: Visit the ancient city with its
            magnificent stupas and historical sites.
          </li>
          <li>
            <strong>Trincomalee</strong>: Enjoy the pristine beaches and explore
            the underwater wonders while snorkeling or diving.
          </li>
          <li>
            <strong>Bentota</strong>: Relax on the golden sandy beaches and
            enjoy various water sports.
          </li>
        </ul>
        <br /> <br />
        <p>
          <b>
            To make your journey even more comfortable, we provide complimentary
            WiFi and water bottles throughout the entire tour. Stay connected
            and hydrated as you explore the wonders of Sri Lanka with us,
            ensuring you have everything you need for a seamless and enjoyable
            travel experience.
          </b>
        </p>
      </div>
      <section id="contact"></section>
      <div className="footer">
        <h2>Contact Us</h2>
        <p>
          <b>Phone:</b> +94710988683
        </p>
        <p>
          <b>Email:</b> boxythewinner@gmail.com
        </p>
      </div>
    </div>
  );
}
