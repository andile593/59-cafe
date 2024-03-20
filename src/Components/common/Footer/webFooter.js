import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Bakery Street, City, Country</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday: 9am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="wwww.facebook.com" aria-label="Facebook"><i className="fab fa-facebook"></i></a></li>
              <li><a href="www.Twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
            </ul>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
