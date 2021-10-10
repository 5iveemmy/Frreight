import React from "react";
import "./Head.css";

function Head() {
  return (
    <>
      <div className="head">
        <div className="head-wrap">
          <div className="left">
            <h1>send FREIGHT</h1>
            <div className="for-search">
              {" "}
              <input type="text" className="search" placeholder="Search" />{" "}
              <i class="fas fa-search fa-sm"></i>
            </div>
          </div>
          <div className="right">
            <button className="request"> Request Quote</button>
            <button className="shipment"> Book Shipment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
