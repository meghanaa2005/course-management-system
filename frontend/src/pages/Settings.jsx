import { useEffect, useState } from "react";

function Settings() {

    // =========================
    // PROFILE
    // =========================

    const [adminName, setAdminName] = useState("Admin");
    const [email, setEmail] = useState("admin@scm.com");

    // =========================
    // ACADEMIC SETTINGS
    // =========================

    const [academicYear, setAcademicYear] = useState("2025-2026");
    const [semester, setSemester] = useState("Semester 1");

    // =========================
    // NOTIFICATIONS
    // =========================

    const [notifications, setNotifications] = useState({
        enrollments: true,
        courses: true,
        faculty: false,
        system: true,
    });

    // =========================
    // SYSTEM PREFERENCES
    // =========================

    const [language, setLanguage] = useState("English");
    const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
    const [itemsPerPage, setItemsPerPage] = useState("10");

    const [message, setMessage] = useState("");


    // =========================
    // LOAD SAVED SETTINGS
    // =========================

    useEffect(() => {

        const savedSettings =
            localStorage.getItem("scmSettings");

        if (!savedSettings) return;

        try {

            const settings =
                JSON.parse(savedSettings);

            setAdminName(
                settings.adminName || "Admin"
            );

            setEmail(
                settings.email || "admin@scm.com"
            );

            setAcademicYear(
                settings.academicYear || "2025-2026"
            );

            setSemester(
                settings.semester || "Semester 1"
            );

            if (settings.notifications) {
                setNotifications(
                    settings.notifications
                );
            }

            setLanguage(
                settings.language || "English"
            );

            setDateFormat(
                settings.dateFormat || "DD/MM/YYYY"
            );

            setItemsPerPage(
                settings.itemsPerPage || "10"
            );

        } catch (error) {

            console.log(
                "Failed to load settings:",
                error
            );

        }

    }, []);


    // =========================
    // SAVE SETTINGS
    // =========================

    const handleSave = () => {

        const settings = {
            adminName,
            email,
            academicYear,
            semester,
            notifications,
            language,
            dateFormat,
            itemsPerPage,
        };

        localStorage.setItem(
            "scmSettings",
            JSON.stringify(settings)
        );

        setMessage(
            "Settings saved successfully!"
        );

        setTimeout(() => {
            setMessage("");
        }, 3000);
    };


    // =========================
    // NOTIFICATION TOGGLE
    // =========================

    const toggleNotification = (name) => {

        setNotifications((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));

    };


    // =========================
    // UI
    // =========================

    return (
        <div className="settings-page">

            {/* =========================
                HEADER
            ========================= */}

            <div className="settings-header">

                <div>

                    <h1>Settings</h1>

                    <p>
                        Manage your account and system preferences
                    </p>

                </div>

                <button
                    className="settings-save-btn"
                    onClick={handleSave}
                >
                    Save Changes
                </button>

            </div>


            {/* =========================
                MESSAGE
            ========================= */}

            {message && (
                <div className="settings-message">
                    ✓ {message}
                </div>
            )}


            {/* =========================
                PROFILE SETTINGS
            ========================= */}

            <div className="settings-card">

                <div className="settings-card-header">

                    <div className="settings-icon purple-settings">
                        👤
                    </div>

                    <div>
                        <h2>Profile Settings</h2>

                        <p>
                            Manage your administrator profile
                        </p>
                    </div>

                </div>


                <div className="settings-form-grid">

                    <div className="settings-field">

                        <label>Admin Name</label>

                        <input
                            type="text"
                            value={adminName}
                            onChange={(e) =>
                                setAdminName(e.target.value)
                            }
                        />

                    </div>


                    <div className="settings-field">

                        <label>Email Address</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />

                    </div>


                    <div className="settings-field">

                        <label>Role</label>

                        <input
                            type="text"
                            value="Administrator"
                            disabled
                        />

                    </div>

                </div>

            </div>


            {/* =========================
                ACADEMIC SETTINGS
            ========================= */}

            <div className="settings-card">

                <div className="settings-card-header">

                    <div className="settings-icon blue-settings">
                        🎓
                    </div>

                    <div>
                        <h2>Academic Settings</h2>

                        <p>
                            Configure academic year and semester
                        </p>
                    </div>

                </div>


                <div className="settings-form-grid">

                    <div className="settings-field">

                        <label>Academic Year</label>

                        <select
                            value={academicYear}
                            onChange={(e) =>
                                setAcademicYear(e.target.value)
                            }
                        >
                            <option value="2025-2026">
                                2025-2026
                            </option>

                            <option value="2026-2027">
                                2026-2027
                            </option>

                            <option value="2027-2028">
                                2027-2028
                            </option>
                        </select>

                    </div>


                    <div className="settings-field">

                        <label>Current Semester</label>

                        <select
                            value={semester}
                            onChange={(e) =>
                                setSemester(e.target.value)
                            }
                        >
                            <option value="Semester 1">
                                Semester 1
                            </option>

                            <option value="Semester 2">
                                Semester 2
                            </option>
                        </select>

                    </div>

                </div>

            </div>


            {/* =========================
                NOTIFICATIONS
            ========================= */}

            <div className="settings-card">

                <div className="settings-card-header">

                    <div className="settings-icon green-settings">
                        🔔
                    </div>

                    <div>
                        <h2>Notifications</h2>

                        <p>
                            Choose which notifications you want to receive
                        </p>
                    </div>

                </div>


                <div className="notification-list">

                    {/* ENROLLMENTS */}

                    <div className="notification-row">

                        <div>
                            <strong>
                                New Enrollments
                            </strong>

                            <span>
                                Get notified when a student enrolls in a course
                            </span>
                        </div>

                        <button
                            type="button"
                            className={
                                notifications.enrollments
                                    ? "toggle active"
                                    : "toggle"
                            }
                            onClick={() =>
                                toggleNotification("enrollments")
                            }
                        >
                            <span></span>
                        </button>

                    </div>


                    {/* COURSES */}

                    <div className="notification-row">

                        <div>
                            <strong>
                                Course Updates
                            </strong>

                            <span>
                                Receive notifications about course changes
                            </span>
                        </div>

                        <button
                            type="button"
                            className={
                                notifications.courses
                                    ? "toggle active"
                                    : "toggle"
                            }
                            onClick={() =>
                                toggleNotification("courses")
                            }
                        >
                            <span></span>
                        </button>

                    </div>


                    {/* FACULTY */}

                    <div className="notification-row">

                        <div>
                            <strong>
                                Faculty Updates
                            </strong>

                            <span>
                                Receive faculty related notifications
                            </span>
                        </div>

                        <button
                            type="button"
                            className={
                                notifications.faculty
                                    ? "toggle active"
                                    : "toggle"
                            }
                            onClick={() =>
                                toggleNotification("faculty")
                            }
                        >
                            <span></span>
                        </button>

                    </div>


                    {/* SYSTEM */}

                    <div className="notification-row">

                        <div>
                            <strong>
                                System Notifications
                            </strong>

                            <span>
                                Important system and security alerts
                            </span>
                        </div>

                        <button
                            type="button"
                            className={
                                notifications.system
                                    ? "toggle active"
                                    : "toggle"
                            }
                            onClick={() =>
                                toggleNotification("system")
                            }
                        >
                            <span></span>
                        </button>

                    </div>

                </div>

            </div>


            {/* =========================
                SYSTEM PREFERENCES
            ========================= */}

            <div className="settings-card">

                <div className="settings-card-header">

                    <div className="settings-icon orange-settings">
                        ⚙️
                    </div>

                    <div>
                        <h2>System Preferences</h2>

                        <p>
                            Customize your application preferences
                        </p>
                    </div>

                </div>


                <div className="settings-form-grid">

                    <div className="settings-field">

                        <label>Language</label>

                        <select
                            value={language}
                            onChange={(e) =>
                                setLanguage(e.target.value)
                            }
                        >
                            <option>English</option>
                        </select>

                    </div>


                    <div className="settings-field">

                        <label>Date Format</label>

                        <select
                            value={dateFormat}
                            onChange={(e) =>
                                setDateFormat(e.target.value)
                            }
                        >
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select>

                    </div>


                    <div className="settings-field">

                        <label>Items Per Page</label>

                        <select
                            value={itemsPerPage}
                            onChange={(e) =>
                                setItemsPerPage(e.target.value)
                            }
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>

                    </div>

                </div>

            </div>


            {/* =========================
                SECURITY
            ========================= */}

            <div className="settings-card">

                <div className="settings-card-header">

                    <div className="settings-icon red-settings">
                        🔐
                    </div>

                    <div>
                        <h2>Security</h2>

                        <p>
                            Manage your account security
                        </p>
                    </div>

                </div>


                <div className="security-row">

                    <div>
                        <strong>
                            Password
                        </strong>

                        <span>
                            Change your account password
                        </span>
                    </div>

                    <button
                        type="button"
                        className="outline-btn"
                    >
                        Change Password
                    </button>

                </div>


                <div className="security-row">

                    <div>
                        <strong>
                            Account Role
                        </strong>

                        <span>
                            Administrator access
                        </span>
                    </div>

                    <span className="role-badge">
                        Administrator
                    </span>

                </div>

            </div>


            {/* =========================
                FOOTER
            ========================= */}

            <div className="settings-footer">

                <span>
                    Student Course Management System
                </span>

                <span>
                    Settings
                </span>

            </div>

        </div>
    );
}

export default Settings;