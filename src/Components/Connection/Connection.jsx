import React from "react";
import "./Connection.css";
import button from "../../assets/projects/Button.png";
import phone from "../../assets/projects/phone.png";
import social from "../../assets/projects/Socials.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Connection = () => {
  return (
    <div className="connection-container">
      <div className="connection-header">
        <h1>Message Abiatour</h1>
        <p>
          Send us a message on what you think and what you want us to help you
          out with
        </p>
      </div>
      <div className="main-content">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="First Name"
              className="first-input"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="second-input"
            />
            <input type="email" placeholder="Email" className="email-input" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="tel-input"
            />
            <input type="text" placeholder="Topic" className="topic-input" />
            <textarea placeholder="Message" className="textarea"></textarea>
            <button>
              Send
              <FaArrowRightLong className="icon" />{" "}
            </button>
          </form>
        </div>
        <div className="info-container">
          <div className="box-container">
            <h3>You can also contact us on</h3>
            <div className="info-item">
              <img src={button} alt="button1" />
              <div className="info-text">
                <p>Umuahia</p>
                <h6>
                  Old Timber road, Umuahia Towmnship Stadium, Umuahia Ahia State
                </h6>
              </div>
            </div>
            <div className="info-item">
              <img src={button} alt="button2" />
              <div className="info-text">
                <p>Aba</p>
                <h6>Eyinba Township Stadium house, Aba road, Aba Abia State</h6>
              </div>
            </div>
            <div className="info-item">
              <img src={phone} alt="phone1" />
              <div className="info-text">
                <p>Call</p>
                <h6>(+234)08133784235</h6>
              </div>
            </div>
            <img src={social} alt="socail1" className="social" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
