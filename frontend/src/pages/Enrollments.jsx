import { useEffect, useState } from "react";
import axios from "axios";

function Enrollments() {

    const [enrollments, setEnrollments] = useState([]);

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [studentId, setStudentId] = useState("");
    const [courseId, setCourseId] = useState("");

    const [message, setMessage] = useState("");


    // GET All Enrollments
    const fetchEnrollments = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/enrollments",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setEnrollments(response.data);

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to load enrollments"
            );
        }
    };


    // GET Students
    const fetchStudents = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/students",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setStudents(response.data);

        } catch (error) {

            console.log(error);

        }
    };


    // GET Courses
    const fetchCourses = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/courses",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCourses(response.data);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {

        fetchEnrollments();
        fetchStudents();
        fetchCourses();

    }, []);


    // ADD Enrollment
    const handleAddEnrollment = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/enrollments",
                {
                    student_id: studentId,
                    course_id: courseId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Student enrolled successfully!");

            clearForm();

            fetchEnrollments();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to add enrollment"
            );
        }
    };


    // DELETE Enrollment
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this enrollment?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/enrollments/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Enrollment deleted successfully!");

            fetchEnrollments();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to delete enrollment"
            );
        }
    };


    // Clear Form
    const clearForm = () => {

        setStudentId("");
        setCourseId("");

        setShowForm(false);
    };


    return (

        <div className="page-container">

            {/* Page Header */}

            <div className="page-header">

                <div>

                    <h1>Enrollments</h1>

                    <p>
                        Manage student course enrollments
                    </p>

                </div>

                <button
                    className="primary-btn"
                    onClick={() => {
                        clearForm();
                        setShowForm(true);
                    }}
                >
                    + Add Enrollment
                </button>

            </div>


            {/* Message */}

            {message && (

                <div className="page-message">
                    {message}
                </div>

            )}


            {/* Add Enrollment Form */}

            {showForm && (

                <form
                    className="student-form"
                    onSubmit={handleAddEnrollment}
                >

                    <h2>
                        Add Enrollment
                    </h2>


                    <select
                        value={studentId}
                        onChange={(e) =>
                            setStudentId(e.target.value)
                        }
                        required
                    >

                        <option value="">
                            Select Student
                        </option>

                        {students.map((student) => (

                            <option
                                key={student.id}
                                value={student.id}
                            >
                                {student.name}
                            </option>

                        ))}

                    </select>


                    <select
                        value={courseId}
                        onChange={(e) =>
                            setCourseId(e.target.value)
                        }
                        required
                    >

                        <option value="">
                            Select Course
                        </option>

                        {courses.map((course) => (

                            <option
                                key={course.id}
                                value={course.id}
                            >
                                {course.course_name}
                            </option>

                        ))}

                    </select>


                    <div className="form-actions">

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            Add Enrollment
                        </button>


                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={clearForm}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            )}


            {/* Enrollments Table */}

            <div className="table-card">

                <table className="students-table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Student</th>
                            <th>Course</th>
                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {enrollments.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="empty-table"
                                >
                                    No enrollments found
                                </td>

                            </tr>

                        ) : (

                            enrollments.map(
                                (enrollment, index) => (

                                    <tr
                                        key={enrollment.id}
                                    >

                                        <td>
                                            {index + 1}
                                        </td>

                                        <td>
                                            {enrollment.student_name}
                                        </td>

                                        <td>
                                            {enrollment.course_name}
                                        </td>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDelete(
                                                        enrollment.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                )
                            )

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Enrollments;