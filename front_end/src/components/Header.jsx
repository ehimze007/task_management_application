import classes from "../styles/Header.module.css";
import logoImage from "../images/logo.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function Header() {
  const { loginWithRedirect } = useAuth0();
  return (
    <header className={classes.header}>
      <Link to="/">
        <img className={classes.logo} src={logoImage} alt="Todo Daily logo" />
      </Link>

      <nav className={classes.nav}>
        <Link onClick={() => loginWithRedirect()}>Login</Link>
        <Link onClick={() => loginWithRedirect()}>Signup</Link>
      </nav>
    </header>
  );
}
