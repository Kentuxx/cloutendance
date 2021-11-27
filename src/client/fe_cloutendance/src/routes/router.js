import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FourZeroFour from "../resources/common/404/four_zero_four";
import LoginCommon from "../resources/common/auth/login.common";
import MainAttendancePage from "../resources/views/attendance_view/main_attendance.page";

const MainRoute = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/attendance" />} />

          {/* ROUTE FOR ATTENDANCE TIME IN TIMEOUT */}
          <Route exact path="/attendance" element={<LoginCommon />} />
          <Route exact path="/timein" element={<MainAttendancePage />} />

          {/* PAGE NOT FOUND */}
          <Route path="*" element={<FourZeroFour />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default MainRoute;
