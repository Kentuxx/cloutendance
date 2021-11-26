import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginCommon from "./common/auth/log_in";
import User from "./common/auth/user";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginCommon />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
