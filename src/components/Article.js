import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { grey } from "@material-ui/core/colors";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EventIcon from "@material-ui/icons/Event";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grey: {
    color: "transparent",
    backgroundColor: grey[500],
  },
  dateWrapper: {
    display: "inline-flex",
    flexDirection: "row",
    height: "20px",
    alignItems: "flex-end",
  },
  secondaryWrapper: {
    maxWidth: "250px",
  },
  dateIcon: {
    alignSelf: "center",
    flexGrow: "1",
    marginRight: "5px",
  },
  dateText: {
    alignSelf: "flex-end",
  },

  grid: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingTop: "10px",
  },
  itemText: {
    paddingRight: "35px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  publisher: {
    marginRight: "50px",
  },
  avatar: {
    alignSelf: "center",
  },
  published: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

const Article = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      {props.article && (
        <ListItem button id={props.article._id} onClick={() => handleMenuClick("details")}>
          <div className={classes.grid}>
            <ListItemAvatar className={classes.avatar}>
              <Avatar variant="circle" className={classes.grey} alt={`Avatar n°{article._id}`}></Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.itemText}
              primary={props.article.title}
              secondary={
                <React.Fragment>
                  <div className={classes.secondaryWrapper}>
                    <Typography component="span" variant="body2" className={classes.publisher} color="textSecondary">
                      {props.article.byline}
                    </Typography>
                    <div className={classes.dateWrapper}>
                      <EventIcon fontSize="inherit" className={classes.dateIcon} />
                      <Typography component="span" variant="body2" color="textSecondary" className={classes.dateText}>
                        {props.article.published_date}
                      </Typography>
                    </div>
                  </div>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <ChevronRightIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
        </ListItem>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default withRouter(Article);
