import { Button } from "./Button"
import coderIllustration from "../images/coder-illustration.png"
import classes from "../styles/LastSection.module.css"
import { Link } from "react-router-dom"

export function LastSection() {
  return (
    <section className={classes.last_section}>
      <img src={coderIllustration} alt="Illustration of a coder sitting" />

      <article className={classes.last_section_article}>
        <h2>Achieve your target and won your life</h2>
        <Link to="/login">
          <Button>Get started</Button>
        </Link>
      </article>
    </section>
  )
}
