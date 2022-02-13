import React, { useState } from "react";

import "./Form.css";

// utility function
import { dateFormatter } from "../../utils/dateFormatter";

const Form = () => {
  // form states
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState(60000);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [favouriteColour, setFavouriteColour] = useState("#7fffd4");
  const [salaryEmoji, setSalaryEmoji] = useState("😏");

  // handle input change
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleFavouriteColourChange = (event) => {
    setFavouriteColour(event.target.value);
  };

  return (
    <>
      <form>
        <div className="inner-form-wrapper">
          <h1 className="title">👩‍💻 🧑‍💻 👨‍💻</h1>
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
                  onChange={(e) => handleFirstNameChange(e)}
                  placeholder="Lorem"
                  required
                  type="text"
                  value={firstName}
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
                  onChange={(e) => handleSurnameChange(e)}
                  placeholder="Ipsum"
                  required
                  type="text"
                  value={surname}
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
                onChange={(e) => handleEmailChange(e)}
                placeholder="loremipsum@hotmail.co.uk"
                required
                size="32"
                type="email"
                value={email}
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
                max={dateFormatter()}
                min="1800-01-01"
                name="dob"
                onChange={(e) => handleDateOfBirthChange(e)}
                required
                type="date"
                value={dateOfBirth}
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
                onChange={(e) => handleFavouriteColourChange(e)}
                required
                type="color"
                value={favouriteColour}
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
                onChange={(e) => handleSalaryChange(e)}
                required
                step="5000"
                type="range"
                value={salary}
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
