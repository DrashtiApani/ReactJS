import React from "react";
import { FaLinkedin, FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "auto" }}>
        {/* Swiggy Logo */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h2 style={{ color: "#fc8019" }}>🍴 Swiggy</h2>
          <p>© 2025 Swiggy Limited</p>
        </div>

        {/* Company Info */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Swiggy Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Swiggy Genie</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h4>Contact us</h4>
          <p>Help & Support</p>
          <p>Partner With Us</p>
          <p>Ride With Us</p>

          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>

        {/* Available In */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h4>Available in:</h4>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
          <select style={{ marginTop: "10px", padding: "5px" }}>
            <option>685 cities</option>
          </select>
        </div>

        {/* Life at Swiggy & Social */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h4>Life at Swiggy</h4>
          <p>Explore With Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>

          <h4>Social Links</h4>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <FaLinkedin />
            <FaInstagram />
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr style={{ margin: "30px 0", borderColor: "#ddd" }} />
      <div style={{ textAlign: "center" }}>
        <h3>For better experience, download the Swiggy app now</h3>
       
      </div>
    </div>
  );
};

export default Footer;
