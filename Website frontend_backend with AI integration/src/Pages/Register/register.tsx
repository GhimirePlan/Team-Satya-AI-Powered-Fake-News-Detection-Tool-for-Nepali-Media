import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

declare global {
  interface Window {
    RegistrationErrors: any;
  }
}

function Register(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    if (!isTermsAccepted) {
      alert("You must agree to the terms and conditions to register.");
      e.preventDefault();
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="Register">
        <div className="Register__header padding" id="particles">
          <h1 className="Register__header__heading">Register</h1>
        </div>
        <div className="Register__form">
          <form onSubmit={handleSubmit} method="POST" className="form-container">
          <input type="hidden" name="csrfmiddlewaretoken" value={window.csrfmiddlewaretoken} />
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your Username"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.username}</div>
            </div>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Enter your First Name"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.first_name}</div>
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter your Last Name"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.last_name}</div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.email}</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.password}</div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="password_conf"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your Password"
                required
              />
              <div className="error-validation">{window.RegistrationErrors.password_connf}</div>
            </div>
            {/* Terms and Conditions Checkbox */}
            <div className="form-group terms-checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <Link to="/tos" target="_blank">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button type="submit" className="btn-register">
              Register
            </button>
          </form>

          <div className="register-link">
            <p className="register-link__text">
              Already have an account?{" "}
              <Link to="/accounts/login" className="btn-login">
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
