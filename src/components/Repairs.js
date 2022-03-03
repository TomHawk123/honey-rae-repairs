// import React from "react"
// import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "./ApplicationViews"

// export const Repairs = () => {
//     return (
//         <>
//             <NavBar />

//             <ApplicationViews />
//         </>
//     )
// }


import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";


// Use custom render function for the Route if logic is needed to see what component should be rendered.
    // If there is something in localStorage (user has logged in), render the NavBar and ApplicationViews components.
    // else take the user to the login screen
export const Repairs = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("honey_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);