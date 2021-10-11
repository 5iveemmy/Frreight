import React from "react";
import "../components/Body.css";

function ThirdBox() {
  return (
    <section className="third-box">
      <div className="details">
        <div className="details-head">
          <h1>Cargo Details</h1>
          <div className="danger">
            <div className="for-switch">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <p className="danger-para">
              Dangerous Cargo <span>(ex. Chemicals, Battery)</span>
            </p>
          </div>
        </div>
        <div className="dimensions">
          <label className="square-switch">
            <input type="checkbox" className="square" />
            <span className="slider-square"></span>
          </label>
          <div className="for-fieldset">
            <div className="volume">
              <fieldset>
                <legend>Total Volume</legend>
                <span>cbm</span>
              </fieldset>
            </div>
            <div className="weight">
              <fieldset>
                <legend>Total Weight</legend>
                <span>Kg</span>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThirdBox;
