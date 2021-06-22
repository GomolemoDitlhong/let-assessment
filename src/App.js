import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import ArticleDetail from "./components/ArticleDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import ArticlePage from "./components/ArticlePage";
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
    white: {
      main: "#ffffff",
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" render={(props) => <ArticlePage time="7" {...props} />} />
            <Route exact from="/month" render={(props) => <ArticlePage time="30" {...props} />} />
            <Route exact from="/today" render={(props) => <ArticlePage time="1" {...props} />} />

            {/* Example routes */}
            <Route exact from="/about" render={() => console.log("About Page")} />
            <Route exact from="/logout" render={() => console.log("You are logged out")} />
            <Route exact from="/profile" render={() => console.log("Profile Page")} />
            <Route exact from="/settings" render={() => console.log("Settings Page")} />

            <Route exact path="/detail" component={ArticleDetail} />
          </Switch>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
