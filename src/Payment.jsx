import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <section className="section payment_section payment">
      <div className="payment_container container">
        <h2 className="section_title payment_title">Activate your MiAmor account</h2>
        <span className="subtext">
          Account Registration <br /> Complete these steps to activate your account.
        </span>

        <div className="services_data payment_card">
          <p>Please transfer the registration fee to the account below:</p>

          <div className="bank_card">
            <p className="bank_detail">
              <strong>Bank Name:</strong> <br /> Palmpay Bank
            </p>
            <p className="bank_detail">
              <strong>Account Number:</strong> <br /> 8158605195
            </p>
            <p className="bank_detail">
              <strong>Account Name:</strong> <br /> Peace
            </p>

            <p className="bank_detail">MiAmor Plus - N10,000.00</p>
            <p className="bank_detail">MiAmor Ultra - N14,000.00</p>
          </div>
        </div>

        <div className="note_box confirm_box">
          <p>
            ❗NOTE: OPAY IS NOT ALLOWED FOR PAYMENT <br />
            ❗YOU CAN USE ANY OTHER NIGERIAN BANK BUT DON'T USE OPAY
          </p>
        </div>

        <div className="payment_btn">
          <Link to="/signup" className="btn back">Back</Link>
          <Link to="/confirm" className="btn next">Next</Link>
        </div>
      </div>
    </section>
  );
};

export default Payment;
