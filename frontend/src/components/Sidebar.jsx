import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <aside className="sidebar">

            {/* =========================
                BRAND
            ========================= */}

            <div className="sidebar-brand">

                <div className="brand-icon">
                    🎓
                </div>

                <div>
                    <h2>EduManage</h2>
                    <span>Academic Portal</span>
                </div>

            </div>


            {/* =========================
                MAIN MENU
            ========================= */}

            <div className="sidebar-menu">

                <p className="menu-title">
                    MAIN MENU
                </p>


                {/* DASHBOARD */}

                <Link
                    to="/dashboard"
                    className={
                        isActive("/dashboard")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>▦</span>
                    Dashboard
                </Link>


                {/* STUDENTS */}

                <Link
                    to="/students"
                    className={
                        isActive("/students")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>♙</span>
                    Students
                </Link>


                {/* COURSES */}

                <Link
                    to="/courses"
                    className={
                        isActive("/courses")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>▣</span>
                    Courses
                </Link>


                {/* FACULTY */}

                <Link
                    to="/faculty"
                    className={
                        isActive("/faculty")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>♧</span>
                    Faculty
                </Link>


                {/* ENROLLMENTS */}

                <Link
                    to="/enrollments"
                    className={
                        isActive("/enrollments")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>▤</span>
                    Enrollments
                </Link>

            </div>


            {/* =========================
                SETTINGS
            ========================= */}

            <div className="sidebar-bottom">

                <Link
                    to="/settings"
                    className={
                        isActive("/settings")
                            ? "menu-link active"
                            : "menu-link"
                    }
                >
                    <span>⚙</span>
                    Settings
                </Link>

            </div>

        </aside>
    );
}

export default Sidebar;