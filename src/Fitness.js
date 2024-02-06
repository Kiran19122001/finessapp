import React from "react";
import "./fitness.css";
import Logo from "./images/Rectangle 7.png";
import BackArrow from "./images/ion_arrow-back-outline.png";
import Watch from "./images/Screenshot 2024-02-05 200304-Photoroom 1.png";
import downArrow from "./images/Vector (2).png";
export default function Fitness() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-section">
      <div className="top-section">
        <div className="arrow-section">
          <img src={BackArrow} alt="arrow" />
        </div>
        <div className="image-section">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <h1 className="heading">
        Your <br /> Fitness Tracker
      </h1>
      <div className="button-section">
        <button className="button-one">Connected Devices</button>
        <button className="button-two">Statistics</button>
      </div>
      <div className="watch-section">
        <div className="watch-firstbackground"> </div>
        <div className="watch-secondbackground"></div>
        <div className="watch-content-section">
          <div className="watch-text-section">
            <p className="smart-watch">Smart Watch</p>
            <h2 className="fire-boult">Fire Boltt</h2>
            <p className="qr-connect">scan the device QR to connect</p>
            <button type="button" className="button-scan">
              Scan
            </button>
          </div>

          <img src={Watch} alt="watch" className="watch" />
        </div>
      </div>
      <div className="foot-steps-section">
        <div className="steps-count">
          <div className="count">
            <div className="para">5,233</div>{" "}
            <span className="steps">Steps</span>
          </div>
        </div>
        <div>
          <div className="calories">
            <p>
              Calories <br />
              <span className="colories-count">1200 Kcal</span>
            </p>
          </div>
          <div className="calories">
            <p>
              Water <br />
              <span className="colories-count">1.8 Ltrs</span>
            </p>
          </div>
        </div>
      </div>

      <div className="form-section">
        <p className="add-det">Add Details</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" className="input-f-w" />
          <div className="second-line">
            <input type="number" placeholder="Age" className="age input-f-w" />
            <input
              type="text"
              placeholder="Height"
              className="height input-f-w"
            />
          </div>
          <div className="section-cont">
            <select className="select-ans">
              <option value="">Are you a gym member?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <img src={downArrow} alt="down" className="dowarraw" />
          </div>

          <div className="section-cont">
            <select className="select-ans">
              <option value="">Do you eat meat?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <img src={downArrow} alt="down" className="dowarraw" />
          </div>

          <div className="section-cont">
            <select className="select-ans">
              <option value="">Are you a cyclist?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <img src={downArrow} alt="down" className="dowarraw" />
          </div>
          <button type="submit" className="save-btn">
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}
