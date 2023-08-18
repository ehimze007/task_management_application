import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { Dashboard } from "./pages/Dashboard";
import { Yesterday } from "./pages/Yesterday";
import { Upcoming } from "./pages/Upcoming";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // { path: "/login", element: <Login /> },
  // { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboard/yesterday", element: <Yesterday /> },
  { path: "/dashboard/upcoming", element: <Upcoming /> },
  { path: "/dashboard/profile", element: <Profile /> },
  { path: "/dashboard/settings", element: <Settings /> },
  { path: "*", element: <Page404 /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b0hyhy00220ehppv.us.auth0.com"
      clientId="MFdzps9gtj23Bf2RxJP6mf2XemfkBY3W"
      // domain="dev-aeql71un2id2lalt.us.auth0.com"
      // clientId="L67d5vPxSCah0izqmCUKLCJRQ0LtgGD2"
      authorizationParams={{
        redirect_uri: window.location.origin + "/dashboard",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
