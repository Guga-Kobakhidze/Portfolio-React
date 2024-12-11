import "./App.css";
import Header from "./components/Header";
import Router from "./router/Router";
import { FUTURE_ROUTER } from "./constants";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter future={FUTURE_ROUTER}>
      <Header />
      <Router />
    </BrowserRouter>
  );
};

export default App;
