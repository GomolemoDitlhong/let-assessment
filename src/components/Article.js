import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "10px",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {article && (
        <ListItem className={classes.card} id={article._id}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={article.title} secondary={article.published_date} />
          <ListItemText secondary={article.byline} />
        </ListItem>
        // <CardContent>
        //   <Typography color="primary" variant="h6">
        //     <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        //       {article.title}
        //     </a>
        //   </Typography>
        //   <Typography color="textSecondary" variant="subtitle2">
        //     {article.byline.original}
        //   </Typography>
        //   <Typography variant="body2" component="p">
        //     {article.snippet}
        //   </Typography>
        // </CardContent>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
