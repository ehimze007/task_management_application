import classes from "../styles/AuthButton.module.css"

// Props needed
// children
// icon
// iconAlt

export function AuthButton(props) {
  return (
    <button className={classes.button}>
      <img src={props.icon} alt={props?.iconAlt || "Auth button icon"} />
      <span>{props.children}</span>
    </button>
  )
}
