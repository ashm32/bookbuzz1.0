import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="footer">
      <div className="btt">
        <a className="btn btn-lg btn-block" href="#header">
          #
        </a>
      </div>

      <div className="midFooter">
        <div className="socialMedia">
          <a href="https://www.facebook.com/">
            <FaFacebook className="socialIcon" />
          </a>

          <a href="https://www.instagram.com/">
            <FaInstagram className="socialIcon" />
          </a>

          <a href="mailto: abc@example.com">
            <MdEmail className="socialIcon" />
          </a>
        </div>

        <p>&copy; 2023 BookBuzz</p>
      </div>

      <div className="btt">
        <a className="btn btn-lg btn-block" href="#header">
          #
        </a>
      </div>
    </div>
  );
};

export default Footer;
