import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

/*
 * A simple navigation which uses react-router-dom for navigation
 * to respective page.
 */

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: "10wh",
    background: "rgb(73,79,82)",
    color: "white",
  },
  navLinks: {
    width: "40%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
  },
  navStyle: {
    color: "white",
  },
}));

function Nav() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <h3> XYZ </h3>
      <ul className={classes.navLinks}>
        <Link className={classes.navStyle} to="/">
          <li>Apply</li>
        </Link>
        <Link className={classes.navStyle} to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
