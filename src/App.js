import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Settings from "./pages/Settings";
import ArticleDetail from "./components/ArticleDetail";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
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
    h1: {
      fontWeight: 600,
      fontSize: 68,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  littleSpace: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
});

function App() {
  const classes = styles();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(` https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_KEY}`);
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
        <div className={classes.littleSpace}>
          <Switch>
            <Route exact from="/" render={(props) => <Home loading={loading} articles={articles} />} />
            <Route exact path="/Profile" render={(props) => <Profile {...props} />} />
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <Route exact path="/settings" render={(props) => <Settings {...props} />} />
            <Route exact path="/detail/:id" component={ArticleDetail} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
