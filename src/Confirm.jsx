import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
  return (
    <section className="section confirm payment">
      <div className="container payment_container">
        <div className="services_data confirm_card">
          <p>
            After payment, send a screenshot to our vendor for confirmation.
            You'd get your Unique Code for registration and also be given access
            to the VIP GROUP immediately:
          </p>

            <a
              href="https://wa.me/2349040989441?text=Goodday,+This+is+my+MIAMOR+Payment+Receipt" // Replace with actual WhatsApp vendor link
              target="_blank"
              rel="noopener noreferrer"
              className="confirm_btn btn_one"
            >
              WhatsApp Vendor
            </a> 

            <a
              href="https://t.me/Miamorofficial3"
              target="_blank"
              rel="noopener noreferrer"
              className="confirm_btn btn_two"
            >
              Telegram Vendor
            </a>


          <div className="note_box confirm_box">
            <p><strong>Include these details in your message:</strong></p>
            <ul>
              <li>● Your full name</li>
              <li>● Screenshot of payment receipt</li>
              <li>● Username</li>
              <li>● Plan</li>
            </ul>
          </div>
        </div>

        <div className="payment_btn">
          <Link to="/signup" className="btn back">Back</Link>
          <Link to="/" className="btn next">Complete</Link>
        </div>
      </div>
    </section>
  );
};

export default Confirm;
