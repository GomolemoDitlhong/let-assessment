import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import SearchIcon from "@material-ui/icons/Search";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: "#FFFFFF",
  },
  drawerPaper: {
    // backgroundColor: "#e6e6e6",
    backgroundColor: "#1f272a",
    width: drawerWidth,
    paddingTop: 0,
  },
  menuLink: {
    color: "#FFFFFF",
  },
  drawerHeader: {
    display: "flex",
    backgroundColor: "#019587",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  toolbar: {
    alignItems: "flex-center",
    display: "flex",
    color: "#FFFFFF",
  },

  menu: {
    color: "#FFFFFF",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  menuHeading: {
    padding: "10px",
    color: "#FFFFFF",
  },
  title: {
    flexGrow: 1,
    color: "#FFFFFF",
    textAlign: "center",
  },
  white: {
    color: "#ffffff",
  },
  listItemText: {
    color: "#4b5563",
    "&:Hover": {
      backgroundColor: "#161617",
      color: "#ffffff",
      borderLeft: "4px solid #1de9b6",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#FFFFFF",
  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropDown = Boolean(anchorEl);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const sideMenuItems = [
    {
      menuTitle: "Today",
      pageURL: "/today",
    },
    {
      menuTitle: "This Week",
      pageURL: "/",
    },
    {
      menuTitle: "This Month",
      pageURL: "/month",
    },
  ];

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
      pageURL: "/logout",
      key: 4,
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            NY Times Most Popular
          </Typography>
          <IconButton aria-label="search">
            <SearchIcon className={classes.white} />
          </IconButton>
          <IconButton className={classes.white} edge="end" aria-label="display more actions" onClick={handleMenu}>
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
            open={openDropDown}
            onClose={() => setAnchorEl(null)}
            className={classes.menu}
          >
            {menuItems.map((menuItem) => {
              const { menuTitle, pageURL, key } = menuItem;
              return (
                <MenuItem className={classes.menuLink} key={key} onClick={() => handleMenuClick(pageURL)}>
                  {menuTitle}
                </MenuItem>
              );
            })}
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.menuHeading}>Most Popular</Typography>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider light />

        <List>
          {sideMenuItems.map((page, index) => (
            <ListItem button key={index} onClick={() => handleMenuClick(page.pageURL)} className={classes.listItemText}>
              <ListItemText primary={page.menuTitle} />
            </ListItem>
          ))}
        </List>
        <Divider light />
      </Drawer>
    </div>
  );
};

export default withRouter(NavBar);
