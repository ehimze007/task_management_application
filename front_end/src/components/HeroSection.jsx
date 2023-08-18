import classes from "../styles/HeroSection.module.css";
import { Button } from "./Button";
import heroImage from "../images/hero-image.png";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className={classes.hero}>
      <article className={classes.hero_article}>
        <h1>Organizing your daily activity with Todo Daily</h1>
        <Link to="/login">
          <Button>Get started</Button>
        </Link>
      </article>

      <img src={heroImage} alt="Man at dock" />
    </section>
  );
}
