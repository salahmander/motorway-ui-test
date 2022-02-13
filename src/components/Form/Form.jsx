import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <>
      <form>
        <div className="inner-form-wrapper">
          <h1 className="title">Form</h1>
        </div>
        <div className="input-wrappers">
          {/*Name*/}
          <div className="name-input-wrapper">
            {/*First Name*/}
            <div className="first-name-input-wrapper input-wrapper">
              <label>
                <h2 className="label-heading">First Name</h2>
                <input
                  autoComplete="given-name"
                  className="first-name-input text-input"
                  id="fname"
                  maxLength="999"
                  minLength="1"
                  name="fname"
                  placeholder="Lorem"
                  required
                  type="text"
                />
              </label>
            </div>
            {/*Surname*/}
            <div className="surname-input-wrapper input-wrapper">
              <label>
                <h2 className="label-heading">Surname</h2>
                <input
                  autoComplete="family-name"
                  className="surname-input text-input"
                  id="surname"
                  maxLength="999"
                  minLength="1"
                  name="surname"
                  placeholder="Ipsum"
                  required
                  type="text"
                />
              </label>
            </div>
          </div>
          {/*Email*/}
          <div className="email-input-wrapper input-wrapper">
            <label>
              <h2 className="label-heading">Email</h2>
              <input
                autoComplete="email"
                className="email-input text-input"
                id="email"
                maxLength="64"
                minLength="3"
                name="email"
                placeholder="loremipsum@hotmail.co.uk"
                required
                size="32"
                type="email"
              />
            </label>
          </div>
          {/*Date Of Birth*/}
          <div className="dob-input-wrapper input-wrapper">
            <label>
              <h2 className="label-heading">Date Of Birth</h2>
              <input
                autoComplete="bday"
                className="dob-input"
                id="dob"
                name="dob"
                required
                type="date"
              />
            </label>
          </div>
          {/*Favourite colour*/}
          <div className="favourite-colour-input-wrapper input-wrapper">
            <label>
              <h2 className="label-heading">Favourite Colour</h2>
              <input
                autoComplete="on"
                className="colour-input"
                id="fcolour"
                name="fcolour"
                required
                type="color"
              />
            </label>
          </div>
          {/*Salary*/}
          <div className="salary-input-wrapper input-wrapper">
            <label>
              <h2 className="label-heading">Salary</h2>
              <input
                className="salary-input"
                id="salary"
                max="120000"
                min="0"
                name="salary"
                required
                step="5000"
                type="range"
              />
              <div className="salary-range-wrapper">
                <span className="salary-range">Salary</span>
              </div>
            </label>
          </div>
          <div className="submit-wrapper">
            <input
              className="form-submit-button"
              type="submit"
              value="Continue"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
