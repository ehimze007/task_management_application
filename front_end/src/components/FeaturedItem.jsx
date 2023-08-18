import classes from "../styles/FeaturedItem.module.css"

// Props (properties) we're expecting
// imageSrc
// imageAlt
// label

export function FeaturedItem(props) {
  return (
    <div className={classes.featured_item_wrapper}>
      <img
        className={classes.featured_item_image}
        src={props.imageSrc}
        alt={props.imageAlt}
      />

      <p className={classes.featured_item_text}>{props.label}</p>
    </div>
  )
}
