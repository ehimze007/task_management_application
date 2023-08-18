import { FeaturedItem } from "./FeaturedItem"
import classes from "../styles/FeaturedSection.module.css"
import smallTaskIcon from "../images/small-task-icon.png"
import writeItIcon from "../images/write-it-icon.png"
import doItIcon from "../images/do-it-icon.png"
import repeatIcon from "../images/repeat-icon.png"

export function FeaturedSection() {
  return (
    <section className={classes.featured_items_wrapper}>
      <article className={classes.featured_items_article}>
        <h2>Don&apos;t let your day doing nothing</h2>
      </article>

      <figure className={classes.featured_items}>
        <FeaturedItem
          imageSrc={smallTaskIcon}
          imageAlt="Small task icon"
          label="Small task"
        />
        <FeaturedItem
          imageSrc={writeItIcon}
          imageAlt="Write it icon"
          label="Write it"
        />
        <FeaturedItem imageSrc={doItIcon} imageAlt="Do it icon" label="Do it" />
        <FeaturedItem
          imageSrc={repeatIcon}
          imageAlt="Calender repeat icon"
          label="Repeat"
        />
      </figure>
    </section>
  )
}
