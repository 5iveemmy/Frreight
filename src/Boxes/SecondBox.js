import React from "react";
import "../components/Body.css";
import { AiOutlineInfoCircle, MdLocationPin } from "react-icons/all";

function SecondBox() {
  return (
    <section className="second-box">
      <div className="info">
        <div className="icon-info">
          <AiOutlineInfoCircle />
        </div>
        <div className="info-wrap">
          <div className="ports">
            <button className="import">Import</button>
            <button className="export">Export</button>
          </div>
          <div className="from">
            <div className="location">
              <MdLocationPin className="md" /> <p>From</p>
            </div>
            <input
              type="text"
              className="for-location"
              placeholder="          City or port"
            />
          </div>
          <div className="to">
            <div className="location or">
              <MdLocationPin className="md" /> <p>To</p>
            </div>
            <input type="text" placeholder="      City or port" />
          </div>
          <div className="ready">
            <input type="date" placeholder="Ready Date" />
          </div>
          <div className="incoterms">
            <select name="seclect" id="dropdown" className="select">
              <option value="incoterms-1">incoterms</option>
              <option value="incoterms-2">incoterms-1</option>
              <option value="incoterms-3">incoterms-2</option>
            </select>
          </div>
          <div className="cargo">
            <input type="text" placeholder="Total Cargo Value" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondBox;
