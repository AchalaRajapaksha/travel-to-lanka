import React from "react";
import "./Home.css";
import { Button } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { IconButton } from "@chakra-ui/react";
import { BsArrowUpCircle } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollButtonRef = useRef(null);

  useEffect(() => {
    // Show button when page is scrolled down by 20px
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  return (
    <div>
      <IconButton
        ref={scrollButtonRef}
        onClick={scrollToTop}
        colorScheme="green"
        aria-label="Scroll to top"
        fontSize="30px"
        icon={<BsArrowUpCircle />}
        style={{
          display: isVisible ? "block" : "none",
          position: "fixed",
          bottom: "70px",
          right: "40px",
          zIndex: "1000",
          padding: "5px", // Add padding if needed
        }}
      />

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
        <div className="carousel">
          <Carousel fade>
            <Carousel.Item>
              <img src="./images/sigiriya.jpeg" alt="Sigiriya" />
              <Carousel.Caption>
                <h3>Beautiful Destinations</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/beach.jpg" alt="beach" />
              <Carousel.Caption>
                <h3>Wonderful Beaches</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/dambulla.jpg" alt="dambulla" />
              <Carousel.Caption>
                <h3>Heritage sites</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="./images/elephant.jpg" alt="elephant" />
              <Carousel.Caption>
                <h3>Wild Life</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <section id="experience"></section>
      <div className="experience-part-wrapper">
        <h2>Who we are</h2>
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
            <img src="./images/img1.jpg" alt="image" className="cover" />
            <img src="./images/img2.jpg" alt="image" className="cover" />
            <img src="./images/img3.jpg" alt="image" className="cover" />
            <img src="./images/img4.jpg" alt="image" className="cover" />
          </div>
          <div className="images-4">
            <img src="./images/img5.jpg" alt="image" className="cover" />
            <img src="./images/img6.jpg" alt="image" className="cover" />
            <img src="./images/img7.jpg" alt="image" className="cover" />
            <img src="./images/img8.jpg" alt="image" className="cover" />
          </div>
          <div className="images-4">
            <img src="./images/img9.jpeg" alt="image" className="cover" />
            <img src="./images/img10.jpeg" alt="image" className="cover" />
            <img src="./images/img11.jpeg" alt="image" className="cover" />
            <img src="./images/img12.jpeg" alt="image" className="cover" />
          </div>
        </div>
      </div>
      <section id="what-we-offer"></section>
      <div className="what-we-offer-wrapper">
        <h2>Most wonderful destinations</h2>
        <p>
          At Travel to Lanka, we provide a diverse range of destinations and
          activities to ensure that every moment of your journey is filled with
          wonder and adventure. Here are some of the incredible places you can
          explore with us:
        </p>
        <div className="card-wrapper">
          <div className="card">
            <Card border="primary">
              <Card.Header>
                <b>Wild Wonders</b>
              </Card.Header>
              <Card.Body>
                <img src="./images/Wildlife.jpg" alt="Wildlife" />
                <Card.Text>
                  <br />
                  <ul>
                    <li>Minneriya National Park</li>
                    <li>Yala National Park</li>
                    <li>Kaudulla National Park</li>
                    <li>Echo Park</li>
                    <li>Udawalawa National Park</li>
                    <li>Wilpattu National Park</li>
                  </ul>
                  <br /> <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="card">
            <Card border="secondary">
              <Card.Header>
                <b>Sun-Kissed Paradises</b>
              </Card.Header>
              <Card.Body>
                <img src="./images/beach2.jpg" alt="Beach" />

                <Card.Text>
                  <br />
                  <ul>
                    <li>Mirissa beach</li>
                    <li>Negombo beach</li>
                    <li>Trincomalee</li>
                    <li>Nilaweli beach</li>
                    <li>Hikkaduwa beach</li>
                    <li>Pasikuda beach</li>
                    <li>Dalawella beach</li>
                    <li>Unawatuna beach</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="card">
            <Card border="success">
              <Card.Header>
                <b>Heritage Sites</b>
              </Card.Header>
              <Card.Body>
                <img src="./images/heritage.jpg" alt="Heritage" />
                <Card.Text>
                  <br />
                  <ul>
                    <li>Galle</li>
                    <li>Sigiriya</li>
                    <li>Dambulla</li>
                    <li>Kandy </li>
                    <li>Polonnaruwa</li>
                    <li>Anuradhapura</li>
                    <li>Colombo</li>
                  </ul>
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="card">
            <Card border="danger">
              <Card.Header>
                <b>Top Hiking Trails</b>
              </Card.Header>
              <Card.Body>
                <img src="./images/hiking.jpg" alt="Hiking" />
                <Card.Text>
                  <br />
                  <ul>
                    <li>Ella</li>
                    <li>Haputhale</li>
                    <li>Knuckles</li>
                    <li>Meemure</li>
                    <li>Adam's Peak</li>
                    <li>World's End</li>
                  </ul>
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="card">
            <Card border="warning">
              <Card.Header>
                <b>Serene Escapes</b>
              </Card.Header>
              <Card.Body>
                <img src="./images/teaplants.jpeg" alt="Teaplants" />
                <Card.Text>
                  <br />
                  <ul>
                    <li>Nuwara Eliya</li>
                  </ul>
                  <br /> <br />
                  <br /> <br />
                  <br /> <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <br /> <br />
        <Alert variant="success">
          <Alert.Heading>Stay Hydrated & Connected</Alert.Heading>
          <hr />
          <p>
            <b>
              To make your journey even more comfortable, we provide
              complimentary WiFi and water bottles throughout the entire tour.
              Stay connected and hydrated as you explore the wonders of Sri
              Lanka with us, ensuring you have everything you need for a
              seamless and enjoyable travel experience.
            </b>
          </p>
        </Alert>
      </div>
      <section id="contact"></section>
      <div className="footer">
        <div className="logo">
          <img src="./Logo.svg" alt="Logo" />
        </div>
        <div className="details-footer">
          <h2>Contact Us</h2>
          <p>
            <b>Phone:</b> +94710988683
          </p>
          <p>
            <b>Email:</b> traveltolankawithsuda@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
