import classes from "../styles/MenuItem.module.css";

export function MenuItem(props) {
  return (
    <div
      onClick={props.onClick}
      className={classes.wrapper}
      style={props.style}
    >
      <img src={props.icon} alt={props.iconAlt || "Menu item icon"} />
      <p style={props.pStyle}>{props.label}</p>
    </div>
  );
}
