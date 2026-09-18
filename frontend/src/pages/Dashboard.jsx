import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [stats, setStats] = useState({
        students: 0,
        courses: 0,
        faculty: 0,
        enrollments: 0,
    });

    const [recentEnrollments, setRecentEnrollments] = useState([]);
    const [courses, setCourses] = useState([]);
    const [allEnrollments, setAllEnrollments] = useState([]);

    // =========================
    // FETCH DASHBOARD DATA
    // =========================

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem("token");

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

               const [
    studentsResponse,
    coursesResponse,
    facultyResponse,
    enrollmentsResponse,
] = await Promise.all([
    axios.get(
        `${import.meta.env.VITE_API_URL}/students`,
        config
    ),
    axios.get(
        `${import.meta.env.VITE_API_URL}/courses`,
        config
    ),
    axios.get(
        `${import.meta.env.VITE_API_URL}/faculty`,
        config
    ),
    axios.get(
        `${import.meta.env.VITE_API_URL}/enrollments`,
        config
    ),
]);
                // =========================
                // STATISTICS
                // =========================

                setStats({
                    students: studentsResponse.data.length,
                    courses: coursesResponse.data.length,
                    faculty: facultyResponse.data.length,
                    enrollments: enrollmentsResponse.data.length,
                });

                // =========================
                // COURSES
                // =========================

                setCourses(coursesResponse.data);

                // Store ALL enrollments
                // Used for course capacity count
                setAllEnrollments(
                    enrollmentsResponse.data
                );

                // Recent 5 enrollments only
                setRecentEnrollments(
                    enrollmentsResponse.data.slice(0, 5)
                );

            } catch (error) {
                console.log(
                    "Dashboard Fetch Error:",
                    error
                );
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="dashboard dashboard-page">

            {/* =========================
                PAGE HEADER
            ========================= */}

            <div className="dashboard-heading">

                <h1>Dashboard</h1>

                <p>
                    Overview of your academic management system
                </p>

            </div>


            {/* =========================
                STATISTICS CARDS
            ========================= */}

            <div className="dashboard-stats">

                {/* STUDENTS */}

                <div className="dashboard-card">

                    <div className="dashboard-card-top">

                        <div className="card-icon student-icon">
                            👨‍🎓
                        </div>

                        <span className="card-arrow">
                            ↗
                        </span>

                    </div>

                    <h2>{stats.students}</h2>

                    <h3>Total Students</h3>

                    <p>↑ 2 this month</p>

                </div>


                {/* COURSES */}

                <div className="dashboard-card">

                    <div className="dashboard-card-top">

                        <div className="card-icon course-icon">
                            📚
                        </div>

                        <span className="card-arrow">
                            ↗
                        </span>

                    </div>

                    <h2>{stats.courses}</h2>

                    <h3>Active Courses</h3>

                    <p>↑ 1 this semester</p>

                </div>


                {/* FACULTY */}

                <div className="dashboard-card">

                    <div className="dashboard-card-top">

                        <div className="card-icon faculty-icon">
                            👨‍🏫
                        </div>

                        <span className="card-arrow">
                            ↗
                        </span>

                    </div>

                    <h2>{stats.faculty}</h2>

                    <h3>Total Faculty</h3>

                    <p>↑ 1 this month</p>

                </div>


                {/* ENROLLMENTS */}

                <div className="dashboard-card">

                    <div className="dashboard-card-top">

                        <div className="card-icon enrollment-icon">
                            📝
                        </div>

                        <span className="card-arrow">
                            ↗
                        </span>

                    </div>

                    <h2>{stats.enrollments}</h2>

                    <h3>Total Enrollments</h3>

                    <p>↑ 3 this week</p>

                </div>

            </div>


            {/* =========================
                TWO COLUMN SECTION
            ========================= */}

            <div className="dashboard-grid">

                {/* =========================
                    RECENT ENROLLMENTS
                ========================= */}

                <div className="dashboard-section">

                    <div className="section-header">

                        <div>
                            <h2>Recent Enrollments</h2>

                            <p>
                                Latest student course enrollments
                            </p>
                        </div>

                        <span className="view-all">
                            View all →
                        </span>

                    </div>


                    <div className="recent-enrollments">

                        {recentEnrollments.length === 0 ? (

                            <div className="empty-dashboard">
                                No enrollments found
                            </div>

                        ) : (

                            recentEnrollments.map(
                                (enrollment, index) => (

                                    <div
                                        className="enrollment-row"
                                        key={
                                            enrollment.id ||
                                            index
                                        }
                                    >

                                        <div className="student-info">

                                            <div className="avatar">
                                                {enrollment.student_name
                                                    ? enrollment.student_name
                                                        .charAt(0)
                                                        .toUpperCase()
                                                    : "S"}
                                            </div>

                                            <div>
                                                <strong>
                                                    {enrollment.student_name ||
                                                        "Student"}
                                                </strong>

                                                <span>
                                                    #
                                                    {enrollment.id}
                                                </span>
                                            </div>

                                        </div>


                                        <div className="enrollment-course">

                                            <strong>
                                                {enrollment.course_name ||
                                                    "Course"}
                                            </strong>

                                            <span>
                                                Course enrollment
                                            </span>

                                        </div>


                                        <span className="status-badge">
                                            Active
                                        </span>

                                    </div>
                                )
                            )
                        )}

                    </div>

                </div>


                {/* =========================
                    STUDENTS BY MAJOR
                ========================= */}

                <div className="dashboard-section major-section">

                    <div className="section-header">

                        <div>
                            <h2>Students by Major</h2>

                            <p>
                                Student distribution
                            </p>
                        </div>

                    </div>


                    <div className="major-content">

                        <div className="major-chart">

                            <div className="donut-chart">

                                <div className="donut-center">

                                    <strong>
                                        {stats.students}
                                    </strong>

                                    <span>
                                        Total
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div className="major-list">

                            <div>
                                <span className="dot purple"></span>

                                <span>
                                    Computer Science
                                </span>

                                <strong>45%</strong>
                            </div>

                            <div>
                                <span className="dot blue"></span>

                                <span>
                                    Information Technology
                                </span>

                                <strong>25%</strong>
                            </div>

                            <div>
                                <span className="dot green"></span>

                                <span>
                                    Electronics
                                </span>

                                <strong>15%</strong>
                            </div>

                            <div>
                                <span className="dot orange"></span>

                                <span>
                                    Other
                                </span>

                                <strong>15%</strong>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================
                COURSE CAPACITY
            ========================= */}

            <div className="dashboard-section capacity-section">

                <div className="section-header">

                    <div>
                        <h2>Course Capacity</h2>

                        <p>
                            Current course enrollment capacity
                        </p>
                    </div>

                    <span className="view-all">
                        View all →
                    </span>

                </div>


                <div className="capacity-list">

                    {courses.length === 0 ? (

                        <div className="empty-dashboard">
                            No courses found
                        </div>

                    ) : (

                        courses.map((course, index) => {

                            // Count how many students
                            // are enrolled in this course
                            const enrolledCount =
                                allEnrollments.filter(
                                    (enrollment) =>
                                        enrollment.course_name ===
                                        course.course_name
                                ).length;

                            // Backend currently does not
                            // have a capacity field
                            const capacity = 30;

                            const percentage = Math.min(
                                Math.round(
                                    (enrolledCount / capacity) *
                                        100
                                ),
                                100
                            );

                            const icons = [
                                "📚",
                                "🗄️",
                                "💻",
                                "🌐",
                            ];

                            const backgrounds = [
                                "purple-bg",
                                "blue-bg",
                                "green-bg",
                                "orange-bg",
                            ];

                            const fills = [
                                "purple-fill",
                                "blue-fill",
                                "green-fill",
                                "orange-fill",
                            ];

                            return (

                                <div
                                    className="capacity-row"
                                    key={
                                        course.id ||
                                        index
                                    }
                                >

                                    {/* ICON */}

                                    <div
                                        className={`capacity-icon ${
                                            backgrounds[
                                                index %
                                                    backgrounds.length
                                            ]
                                        }`}
                                    >
                                        {
                                            icons[
                                                index %
                                                    icons.length
                                            ]
                                        }
                                    </div>


                                    {/* COURSE NAME */}

                                    <div className="capacity-name">

                                        <strong>
                                            {course.course_code}
                                        </strong>

                                        <span>
                                            {course.course_name}
                                        </span>

                                    </div>


                                    {/* PROGRESS BAR */}

                                    <div className="capacity-bar">

                                        <div className="progress">

                                            <div
                                                className={`progress-fill ${
                                                    fills[
                                                        index %
                                                            fills.length
                                                    ]
                                                }`}
                                                style={{
                                                    width: `${percentage}%`,
                                                }}
                                            ></div>

                                        </div>

                                    </div>


                                    {/* ENROLLMENT COUNT */}

                                    <div className="capacity-number">

                                        <strong>
                                            {
                                                enrolledCount
                                            }
                                            /
                                            {capacity}
                                        </strong>

                                        <span>
                                            {percentage}%
                                        </span>

                                    </div>

                                </div>
                            );
                        })

                    )}

                </div>

            </div>


            {/* =========================
                COURSE OVERVIEW
            ========================= */}

            <div className="dashboard-section course-overview">

                <div className="section-header">

                    <div>
                        <h2>Course Overview</h2>

                        <p>
                            Courses currently available in the system
                        </p>
                    </div>

                </div>


                <div className="overview-content">

                    <div className="overview-number">
                        {stats.courses}
                    </div>

                    <div>

                        <h3>
                            Active Courses
                        </h3>

                        <p>
                            Courses available for student enrollment
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;