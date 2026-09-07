import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Enrollments from "./pages/Enrollments";
import Settings from "./pages/Settings";
import MainLayout from "./components/MainLayout";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Login - Navbar & Sidebar vaddu */}
                <Route path="/" element={<Login />} />

                {/* Common Layout */}
                <Route element={<MainLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/students"
                        element={<Students />}
                    />

                    <Route
                        path="/courses"
                        element={<Courses />}
                    />

                    <Route
                        path="/faculty"
                        element={<Faculty />}
                    />

                    <Route
                        path="/enrollments"
                        element={<Enrollments />}
                    />
                 
                 <Route path="/settings" element={<Settings />} />
                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;