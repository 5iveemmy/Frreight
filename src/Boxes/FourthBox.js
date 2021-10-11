import React from "react";
import "../components/Body.css";

function FourthBox() {
  return (
    <section className="fourth-box">
      <div className="additional">
        <h1>Additional Services</h1>
        <div className="all">
          <div className="forwarding">
            <div className="for-pad">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="texts">
              <h3>Export Forwarding</h3>
              <p>We handle customs clearance and documentation.</p>
            </div>
          </div>
          <div className="forwarding">
            <div className="for-pad">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="texts">
              <h3>Import Customs Clearance</h3>
              <p>We handle import customs and regulatory requirements.</p>
            </div>
          </div>
          <div className="forwarding">
            <div className="for-pad">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="texts">
              <h3>Cargo Insurance</h3>
              <p>
                Protect your cargo from logistics risks up to its full value.
              </p>
            </div>
          </div>
          <div className="forwarding">
            <div className="for-pad">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="texts">
              <h3>Transport/Delivery</h3>
              <p>We deliver cargo to your door step from the ports.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthBox;
