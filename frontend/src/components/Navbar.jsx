import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const [academicYear, setAcademicYear] = useState("2025-2026");

    useEffect(() => {

        const loadAcademicYear = () => {
            const savedSettings = localStorage.getItem("scmSettings");

            if (savedSettings) {
                try {
                    const settings = JSON.parse(savedSettings);

                    setAcademicYear(
                        settings.academicYear || "2025-2026"
                    );

                } catch (error) {
                    console.log("Failed to load academic year:", error);
                }
            }
        };

        // Load when Navbar opens
        loadAcademicYear();

        // Update when Settings are saved
        window.addEventListener(
            "scmSettingsUpdated",
            loadAcademicYear
        );

        return () => {
            window.removeEventListener(
                "scmSettingsUpdated",
                loadAcademicYear
            );
        };

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar">

            <div className="navbar-left">
                <span className="academic-year">
                    Academic Year <strong>{academicYear}</strong>
                </span>
            </div>

            <div className="navbar-right">

                <div className="notification">
                    🔔
                    <span>3</span>
                </div>

                <div className="admin-profile">

                    <div className="admin-avatar">
                        AD
                    </div>

                    <div className="admin-info">
                        <strong>Admin</strong>
                        <span>Administrator</span>
                    </div>

                    <span className="dropdown-arrow">⌄</span>

                </div>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;