import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./login.scss";

function Login(props) {
  // Handle form submission
  return (
    <>
      <div className="Login">
        <div className="Login__header padding" id="particles">
          <h1 className="Login__header__heading">Log-In</h1>
        </div>
        <div className="Login__form">
          <form className="form-container" method="POST">
            <input type="hidden" name="csrfmiddlewaretoken" value={window.csrfmiddlewaretoken} />
            <div className="form-group">
              
              <label htmlFor="email">Email/Username</label>
              <input
                type="text" 
                name="username"
                placeholder="Enter your email/username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="error-vaidation">{window.LoginError}</div>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <Link to="/accounts/register" className="btn-register">
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
