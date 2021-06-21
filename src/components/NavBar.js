import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    minHeight: 460,
  },
  toolbar: {
    color: "white",
    minHeight: 60,
    alignItems: "flex-center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "About",
      pageURL: "/about",
      key: 1,
    },
    {
      menuTitle: "Profile",
      pageURL: "/profile",
      key: 2,
    },

    {
      menuTitle: "Settings",
      pageURL: "/settings",
      key: 3,
    },

    {
      menuTitle: "Logout",
      pageURL: "/",
      key: 4,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5">
            New York Times
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="display more actions" onClick={handleMenu}>
            <MoreIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
            className={classes.menu}
          >
            {menuItems.map((menuItem) => {
              const { menuTitle, pageURL, key } = menuItem;
              return (
                <MenuItem key={key} onClick={() => handleMenuClick(pageURL)}>
                  {menuTitle}
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
