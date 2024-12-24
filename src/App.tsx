import "./App.css";
import Router from "./router/Router";
import { FUTURE_ROUTER } from "./constants";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "./provider/ThemeProvider";

const App = () => {
  return (
    <BrowserRouter future={FUTURE_ROUTER}>
      <CustomThemeProvider>
        <Router />
      </CustomThemeProvider>
    </BrowserRouter>
  );
};

export default App;
