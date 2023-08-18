import classes from "../styles/Button.module.css"

// props
// variant => outlined
// size => sm

export function Button(props) {
  const sizeClassName =
    props?.size === "sm" ? classes.button_sm : classes.button
  const variantClassName =
    props?.variant === "outlined" ? classes.button_outlined : ""

  return (
    <button
      className={sizeClassName + " " + variantClassName}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
