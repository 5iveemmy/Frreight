import React from "react";
import "../components/Body.css";
import {
  RiPlaneFill,
  FaUserGraduate,
  FaTruck,
  IoBoatSharp,
} from "react-icons/all";

function FirstBox() {
  return (
    <section className="first-box">
      <div className="service">
        <p className="service-para">Select a service</p>
        <div className="service-wrap">
          <div className="air mode">
            <div className="mode-wrap">
              <p>Air Freight</p>
              <RiPlaneFill className="transports" />
            </div>
          </div>
          <div className="sea mode">
            <div className="mode-wrap">
              <p>Sea Freight</p>
              <IoBoatSharp className="transports trans" />
            </div>
          </div>
          <div className="land mode">
            <div className="mode-wrap">
              <p>Inland </p>
              <span>(Truck & Barge)</span>
              <FaTruck className="transports trans" />
            </div>
          </div>
          <div className="custom mode">
            <div className="mode-wrap">
              <p>Customs</p>
              <span>Clerance</span>
              <FaUserGraduate className="transports trans" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstBox;
