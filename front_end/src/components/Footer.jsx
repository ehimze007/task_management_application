import classes from "../styles/Footer.module.css"
import logoIcon from "../images/logo-icon.png"

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <article className={classes.description}>
          <img src={logoIcon} alt="Todo daily logo" />
          <p>Lets change your habit join with million people</p>
        </article>

        <article className={classes.address}>
          <p>DK Tech Company</p>
          <p>Uma Street, Lost City, Aincard </p>
        </article>
      </div>

      <div className={classes.links_wrapper}>
        <div className={classes.links}>
          <p>Features</p>
          <nav>Lorem</nav>
          <nav>Ipsum</nav>
          <nav>Dolor</nav>
          <nav>Sit</nav>
        </div>

        <div className={classes.links}>
          <p>Pricing</p>
          <nav>Lorem</nav>
          <nav>Ipsum</nav>
          <nav>Dolor</nav>
          <nav>Sit</nav>
        </div>
      </div>
    </footer>
  )
}
