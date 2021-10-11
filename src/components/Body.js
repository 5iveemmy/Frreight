import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import FirstBox from "../Boxes/FirstBox";
import FourthBox from "../Boxes/FourthBox";
import SecondBox from "../Boxes/SecondBox";
import ThirdBox from "../Boxes/ThirdBox";

function Body() {
  return (
    <>
      <div className="container">
        <div className="booking">
          <BsArrowLeftShort className="short" />
          <h1>New Booking</h1>
          <p className="book-para">
            Fill in the information below to get a quote or create a new booking
          </p>
        </div>
        <FirstBox />
        <SecondBox />
        <ThirdBox />
        <FourthBox />
      </div>
    </>
  );
}

export default Body;
