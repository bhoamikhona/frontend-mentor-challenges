import React from "react";
import "./style.css";

const Signup = () => {
  return (
    <div className="card card--signup">
      <div className="signup__left">
        <div className="signup__info">
          <h1 className="signup__heading">Stay updated!</h1>
          <p className="signup__message">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="signup__list">
            <li className="signup__list-item">
              <img
                src="./assets/images/icon-list.svg"
                alt=""
                role="presentation"
                className="signup__tickmark"
              />
              <span>Product discovery and building what matters</span>
            </li>
            <li className="signup__list-item">
              <img
                src="./assets/images/icon-list.svg"
                alt=""
                role="presentation"
                className="signup__tickmark"
              />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className="signup__list-item">
              <img
                src="./assets/images/icon-list.svg"
                alt=""
                role="presentation"
                className="signup__tickmark"
              />
              <span>And much more!</span>
            </li>
          </ul>
          <form className="signup__form">
            <div className="form-labels">
              <label htmlFor="email" className="signup__label">
                Email address
              </label>
              <label htmlFor="email" className="signup__label--error">
                Valid email required
              </label>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="signup__input error"
              autoComplete="off"
            />
            <input
              type="submit"
              value="Subscribe to monthly newsletter"
              className="btn"
            />
          </form>
        </div>
      </div>
      <div className="signup__right">
        <div className="signup__img-box">
          <img
            className="signup__img"
            src="./assets/images/illustration-sign-up-desktop.svg"
            alt="illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
