import "./App.css";
import { FUTURE_ROUTER } from "./constants";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes";
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
