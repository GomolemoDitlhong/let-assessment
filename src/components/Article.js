import React from "react";
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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
    alignSelf: "cenzter",
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
  chevron: {
    "&:hover": {
      backgroundColor: theme.primary,
    },
  },
  published: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

const Article = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { article } = props;

  const ListItemClickHandle = () => {
    history.push({
      pathname: `/detail`,
      state: { article: article },
    });
  };

  return (
    <div className={classes.root}>
      {article && (
        <ListItem button id={article._id} key="{article}" onClick={ListItemClickHandle}>
          <div className={classes.grid}>
            <ListItemAvatar className={classes.avatar}>
              <Avatar variant="circle" className={classes.grey} alt={`Avatar n°{article._id}`}></Avatar>
            </ListItemAvatar>
            <ListItemText
              className={classes.itemText}
              primary={article.title}
              secondary={
                <React.Fragment>
                  <div className={classes.secondaryWrapper}>
                    <Typography component="span" variant="body2" className={classes.publisher} color="textSecondary">
                      {article.byline}
                    </Typography>
                    <div className={classes.dateWrapper}>
                      <EventIcon fontSize="inherit" className={classes.dateIcon} />
                      <Typography component="span" variant="body2" color="textSecondary" className={classes.dateText}>
                        {article.published_date}
                      </Typography>
                    </div>
                  </div>
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction className={classes.chevron}>
              <Link to={{ pathname: `/detai`, state: { article: article } }}>
                <IconButton edge="end" aria-label="comments">
                  <ChevronRightIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </div>
        </ListItem>
      )}
    </div>
  );
};

export default Article;
