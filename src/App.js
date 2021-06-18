import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";
import Settings from "./components/pages/Settings";
import Details from "./components/pages/Details";
import Articles from "./components/Articles";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1de9b6",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },

  footer: {
    backgroundColor: "#d1d1d1",
  },
});

function App() {
  const classes = styles();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(` https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=3QSkActGjOVF0qFk5V3SMQAn1cyTQuSR`);
      // const res = await axios.get(` https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=' = ${process.env.REACT_APP_KEY}`);

      console.log(res);
      setArticles(res.data.results);

      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.bigSpace}>
          <Switch>
            <Route exact from="/" render={(props) => <Home loading={loading} articles={articles} />} />
            <Route exact path="/Profile" render={(props) => <Profile {...props} />} />
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <Route exact path="/settings" render={(props) => <Settings {...props} />} />
            <Route exact path="/articles" render={(props) => <Articles {...props} />} />
          </Switch>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace} ${classes.footer}`}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
