import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPage />
    </React.Fragment>
  );
};

export default App;
