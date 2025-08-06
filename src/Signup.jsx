import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    password: '',
    plan: '',
    phone: '',
    uniqueCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your signup logic here (API call)
  };

  return (
    <main className="main">
      <section className="section signup">
        <img src="/Images/Background img.jpeg" alt="Home" className="background_img" />

        <div className="signup_container container home_container">
          <div className="logo">
            <img src="/Images/miamor_logo-removebg-preview (2).png" alt="MiAmor Logo" className="logo" />
          </div>

          <form className="signup_form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select Country</option>
              <option value="NG">Nigeria</option>
              <option value="US">Foreigners</option>
            </select>

            <div className="password_field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <select name="plan" value={formData.plan} onChange={handleChange} required>
              <option value="">Payment Plan</option>
              <option value="Plus">MiAmor Plus - 10,000.00</option>
              <option value="Ultra">MiAmor Ultra - 14,000.00</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="uniqueCode"
              placeholder="Unique Code"
              value={formData.uniqueCode}
              onChange={handleChange}
              required
            />

            <p className="access_link">
              <b>
                Don't have a Unique Code? <a onClick={() => navigate("/payment")}>Click here</a>
              </b>
            </p>

            <button onClick={() => navigate("/payment")} className="signup_btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
