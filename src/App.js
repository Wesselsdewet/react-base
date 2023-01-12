import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/Header";
import ScrollToTop from "./components/navigation/ScrollToTop";

import Home from "./pages/HomePage";
import Welcome from "./pages/WelcomePage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Footer from "./components/footer/Footer";
import AdminLandingPage from "./components/backend/AdminLandingPage";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/react-base" exact>
            <Home />
          </Route>
          <Route path="/react-base/welcome">
            <Welcome />
          </Route>
          <Route path="/react-base/products">
            <Products />
          </Route>
          <Route path="/react-base/contact-us">
            <Contact />
          </Route>
          <Route path="/react-base/admin">
            <AdminLandingPage />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
