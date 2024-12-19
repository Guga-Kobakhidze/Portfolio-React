import "./App.css";
import Router from "./router/Router";
import { FUTURE_ROUTER } from "./constants";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter future={FUTURE_ROUTER}>
      <Router />
    </BrowserRouter>
  );
};

export default App;
