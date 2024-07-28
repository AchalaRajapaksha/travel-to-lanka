import React from "react";
import { Button } from "@chakra-ui/react";
import "./Navigationbar.css";
export default function Navigationbar() {
  return (
    <div className="navigationbar-wrapper">
      <div className="navigationbar-logo-and-name">
        <div className="logo">
          <img src="./Logo.svg" alt="Logo" />
        </div>
        <h1>Travel to Lanka</h1>
      </div>
      <div className="navigationbar-buttons">
        <Button colorScheme="teal" variant="outline" size="sm">
          Discover Sri Lanka
        </Button>

        <Button colorScheme="teal" variant="outline" size="sm">
          About us
        </Button>

        <Button colorScheme="teal" variant="outline" size="sm">
          Contact us
        </Button>
      </div>
    </div>
  );
}
