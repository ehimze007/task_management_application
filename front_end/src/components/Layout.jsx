import logo from "../images/logo-alt.png";
import avatar from "../images/avatar.png";
import classes from "../styles/Layout.module.css";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import { useState } from "react";
import profileIcon from "../images/profile-icon.svg";
import settingsIcon from "../images/settings-icon.svg";
import logoutIcon from "../images/logout-icon.svg";
import calendarClearIcon from "../images/calendar-clear-icon.svg";
import calendarClearActiveIcon from "../images/calendar-clear-active-icon.svg";
import calendarIcon from "../images/calendar-icon.svg";
import calendarActiveIcon from "../images/calendar-active-icon.svg";
import calendarNumberIcon from "../images/calendar-number-icon.svg";
import calendarNumberActiveIcon from "../images/calendar-number-active-icon.svg";
import profileIconGray from "../images/profile-icon-gray.svg";
import profileIconActive from "../images/profile-icon-active.svg";
import settingsIconGray from "../images/settings-icon-gray.svg";
import settingsIconActive from "../images/settings-icon-active.svg";
import { useAuth0 } from "@auth0/auth0-react";

export function Layout(props) {
  const { logout } = useAuth0();
  const route = useLocation();
  const pathname = route.pathname;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Link to="/dashboard">
          <img className={classes.logo} src={logo} alt="Todo daily logo" />
        </Link>

        <div
          className={classes.avatar_wrapper}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <p>James</p>
          <img src={avatar} alt="Profile avatar" />
        </div>

        <div
          className={
            showMenu ? classes.menu_container_active : classes.menu_container
          }
        >
          <Link to="/dashboard/profile">
            <MenuItem
              icon={profileIcon}
              label="Profile"
              style={{
                padding: "13px 20px 15px",
                borderRadius: "16px 16px 0 0",
              }}
            />
          </Link>
          <Link to="/dashboard/settings">
            <MenuItem
              icon={settingsIcon}
              label="Settings"
              style={{ padding: "15px 20px 20px" }}
            />
          </Link>
          <MenuItem
            onClick={logout}
            icon={logoutIcon}
            label="Logout"
            pStyle={{
              color: "var(--primary-color)",
            }}
            style={{
              padding: "13px 20px 20px",
              borderTop: "1px solid #D7D7D7",
              borderRadius: "0 0 16px 16px",
            }}
          />
        </div>
      </header>

      <div className={classes.main_wrapper}>
        <aside className={classes.aside}>
          {pathname === "/dashboard/profile" ||
          pathname === "/dashboard/settings" ? (
            <>
              <Link to="/dashboard/profile">
                <MenuItem
                  icon={
                    pathname === "/dashboard/profile"
                      ? profileIconActive
                      : profileIconGray
                  }
                  label="Profile"
                  style={{
                    padding: "15px 45px",
                  }}
                  pStyle={{
                    color:
                      pathname === "/dashboard/profile"
                        ? "var(--primary-color)"
                        : "#6B6B6B",
                  }}
                />
              </Link>
              <Link to="/dashboard/settings">
                <MenuItem
                  icon={
                    pathname === "/dashboard/settings"
                      ? settingsIconActive
                      : settingsIconGray
                  }
                  label="Settings"
                  style={{
                    padding: "15px 45px",
                  }}
                  pStyle={{
                    color:
                      pathname === "/dashboard/settings"
                        ? "var(--primary-color)"
                        : "#6B6B6B",
                  }}
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">
                <MenuItem
                  icon={
                    pathname === "/dashboard"
                      ? calendarClearActiveIcon
                      : calendarClearIcon
                  }
                  label="Today"
                  style={{
                    padding: "15px 45px",
                  }}
                  pStyle={{
                    color:
                      pathname === "/dashboard"
                        ? "var(--primary-color)"
                        : "#6B6B6B",
                  }}
                />
              </Link>

              <Link to="/dashboard/yesterday">
                <MenuItem
                  icon={
                    pathname === "/dashboard/yesterday"
                      ? calendarActiveIcon
                      : calendarIcon
                  }
                  label="Yesterday"
                  style={{
                    padding: "15px 45px",
                  }}
                  pStyle={{
                    color:
                      pathname === "/dashboard/yesterday"
                        ? "var(--primary-color)"
                        : "#6B6B6B",
                  }}
                />
              </Link>

              <Link to="/dashboard/upcoming">
                <MenuItem
                  icon={
                    pathname === "/dashboard/upcoming"
                      ? calendarNumberActiveIcon
                      : calendarNumberIcon
                  }
                  label="Upcoming"
                  style={{
                    padding: "15px 45px",
                  }}
                  pStyle={{
                    color:
                      pathname === "/dashboard/upcoming"
                        ? "var(--primary-color)"
                        : "#6B6B6B",
                  }}
                />
              </Link>
            </>
          )}
        </aside>
        <section>{props.children}</section>
      </div>
    </div>
  );
}
