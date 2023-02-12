import React from "react";
import { Route, Routes } from "react-router-dom";
import Anouncements from "./pages/anouncements/Anouncements";
import Courses from "./pages/courses/Courses";
import Materials from "./pages/courses/materials/Materials";
import MaterialsDetails from "./pages/courses/materials/MaterialsDetails";
import Ratings from "./pages/courses/Ratings";
import Students from "./pages/courses/students/Students";
import MainLayout from "./pages/MainLayout";
import Notifications from "./pages/notifications/Notifications";
import Schedule from "./pages/schedule/Schedule";
import Submitted from "./pages/courses/materials/details-pages/Submitted";
import Waiting from "./pages/courses/materials/details-pages/Waiting";
import Late from "./pages/courses/materials/details-pages/Late";
import StudentDetail from "./pages/courses/students/StudentDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="courses" element={<Courses />}>
          <Route path="materials" element={<Materials />} />
          <Route path="materials/:id/details" element={<MaterialsDetails />}>
            <Route path="submitted" element={<Submitted />} />
            <Route path="waiting" element={<Waiting />} />
            <Route path="late" element={<Late />} />
          </Route>
          <Route path="students" element={<Students />} />
          <Route path="students/:id/details" element={<StudentDetail />} />
          <Route path="ratings" element={<Ratings />} />
        </Route>
        <Route path="anouncements" element={<Anouncements />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
