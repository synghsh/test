import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import reportWebVitals from "./reportWebVitals";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@emotion/react";
import testappTheme from "./themes/testappTheme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ConfigureStore from "./stores/configureStores";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const stores = ConfigureStore();
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={stores}>
        <BrowserRouter>
          <ThemeProvider theme={testappTheme}>
            <SnackbarProvider maxSnack={4}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <App />
              </LocalizationProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
