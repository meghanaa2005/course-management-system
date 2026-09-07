import { useEffect, useState } from "react";
import axios from "axios";

function Courses() {

    const [courses, setCourses] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [credits, setCredits] = useState("");

    const [editId, setEditId] = useState(null);

    const [message, setMessage] = useState("");


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

            setMessage(
                error.response?.data?.message ||
                "Failed to load courses"
            );
        }
    };


    useEffect(() => {
        fetchCourses();
    }, []);


    // ADD Course
    const handleAddCourse = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/courses",
                {
                    course_name: courseName,
                    course_code: courseCode,
                    credits: Number(credits)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Course added successfully!");

            clearForm();

            fetchCourses();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to add course"
            );
        }
    };


    // EDIT Course
    const handleEdit = (course) => {

        setEditId(course.id);

        setCourseName(course.course_name);
        setCourseCode(course.course_code);
        setCredits(course.credits);

        setShowForm(true);

        setMessage("");
    };


    // UPDATE Course
    const handleUpdateCourse = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/courses/${editId}`,
                {
                    course_name: courseName,
                    course_code: courseCode,
                    credits: Number(credits)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Course updated successfully!");

            clearForm();

            fetchCourses();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to update course"
            );
        }
    };


    // DELETE Course
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this course?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/courses/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Course deleted successfully!");

            fetchCourses();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to delete course"
            );
        }
    };


    // Clear Form
    const clearForm = () => {

        setCourseName("");
        setCourseCode("");
        setCredits("");

        setEditId(null);
        setShowForm(false);
    };


    return (

        <div className="page-container">

            {/* Page Header */}

            <div className="page-header">

                <div>

                    <h1>Courses</h1>

                    <p>
                        Manage courses and course information
                    </p>

                </div>

                <button
                    className="primary-btn"
                    onClick={() => {
                        clearForm();
                        setShowForm(true);
                    }}
                >
                    + Add Course
                </button>

            </div>


            {/* Message */}

            {message && (

                <div className="page-message">
                    {message}
                </div>

            )}


            {/* Add / Edit Form */}

            {showForm && (

                <form
                    className="student-form"
                    onSubmit={
                        editId
                            ? handleUpdateCourse
                            : handleAddCourse
                    }
                >

                    <h2>
                        {editId
                            ? "Edit Course"
                            : "Add Course"
                        }
                    </h2>


                    <input
                        type="text"
                        placeholder="Enter Course Name"
                        value={courseName}
                        onChange={(e) =>
                            setCourseName(e.target.value)
                        }
                        required
                    />


                    <input
                        type="text"
                        placeholder="Enter Course Code"
                        value={courseCode}
                        onChange={(e) =>
                            setCourseCode(e.target.value)
                        }
                        required
                    />


                    <input
                        type="number"
                        placeholder="Enter Credits"
                        value={credits}
                        onChange={(e) =>
                            setCredits(e.target.value)
                        }
                        required
                    />


                    <div className="form-actions">

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            {editId
                                ? "Update Course"
                                : "Add Course"
                            }
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


            {/* Courses Table */}

            <div className="table-card">

                <table className="students-table">

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Credits</th>
                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {courses.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="empty-table"
                                >
                                    No courses found
                                </td>

                            </tr>

                        ) : (

                            courses.map((course, index) => (

                                <tr key={course.id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {course.course_name}
                                    </td>

                                    <td>
                                        {course.course_code}
                                    </td>

                                    <td>
                                        {course.credits}
                                    </td>

                                    <td>

                                        <div className="action-buttons">

                                            <button
                                                className="edit-btn"
                                                onClick={() =>
                                                    handleEdit(course)
                                                }
                                            >
                                                Edit
                                            </button>


                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDelete(course.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Courses;