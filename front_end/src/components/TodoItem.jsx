import { Link } from "react-router-dom"
import { MenuItem } from "./MenuItem"
import editIcon from "../images/edit-icon.svg"
import moreIcon from "../images/more-icon.svg"
import trashIcon from "../images/trash-icon.svg"
import checkIcon from "../images/check-icon.png"
import classes from "../styles/TodoItem.module.css"
import { useState } from "react"

// Props
// title
// subtitle
// completed

export function TodoItem(props) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className={classes.wrapper}>
      <figure className={classes.checkbox}>
        <img src={checkIcon} alt="Check icon" />
      </figure>

      <article className={classes.card}>
        <div className={classes.card_header}>
          <p className={classes.title}>{props.title}</p>

          <figure className={classes.card_icons}>
            <Link to="#">
              <img src={editIcon} alt="Edit icon" />
            </Link>

            <div className={classes.more_icon_container}>
              <img
                src={moreIcon}
                alt="Menu more icon"
                onClick={() => {
                  setShowPopup(!showPopup)
                }}
              />

              {showPopup ? (
                <div className={classes.menu_container}>
                  <MenuItem
                    label="Delete"
                    icon={trashIcon}
                    style={{ padding: "20px 15px" }}
                    pStyle={{
                      fontSize: "18px",
                      lineHeight: "21px",
                      color: "var(--primary-color)",
                    }}
                  />
                </div>
              ) : null}
            </div>
          </figure>
        </div>

        <p className={classes.subtitle}>{props.subtitle}</p>
      </article>
    </div>
  )
}
