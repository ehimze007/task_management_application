import { AuthButton } from "../components/AuthButton";
import { Link } from "react-router-dom";
import classes from "../styles/Login.module.css";
import logo from "../images/logo.png";
import googleIcon from "../images/google-icon.svg";
import githubIcon from "../images/github-icon.svg";

export function Login() {
  return (
    <main className={classes.main}>
      <section className={classes.form_wrapper}>
        <Link to="/">
          <img className={classes.logo_link} src={logo} alt="Todo daily logo" />
        </Link>

        <h3>Sign in</h3>

        <div className={classes.auth_buttons}>
          <Link to="/dashboard">
            <AuthButton icon={googleIcon}>Continue using Google</AuthButton>
          </Link>

          <Link to="/dashboard">
            <AuthButton icon={githubIcon}>Continue using GitHub</AuthButton>
          </Link>
        </div>

        <footer>
          <p>
            <span>Not have account? </span>
            <Link to="/signup">Signup</Link>
          </p>
        </footer>
      </section>
    </main>
  );
}
