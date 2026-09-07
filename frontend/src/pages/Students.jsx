import { useEffect, useState } from "react";
import axios from "axios";

function Students() {

    const [students, setStudents] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [editId, setEditId] = useState(null);

    const [message, setMessage] = useState("");


    // =========================
    // GET Students
    // =========================

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

            setMessage(
                error.response?.data?.message ||
                "Failed to load students"
            );
        }
    };


    useEffect(() => {
        fetchStudents();
    }, []);


    // =========================
    // ADD Student
    // =========================

    const handleAddStudent = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/students",
                {
                    name,
                    email,
                    phone
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Student added successfully!");

            clearForm();

            fetchStudents();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to add student"
            );
        }
    };


    // =========================
    // EDIT Student
    // =========================

    const handleEdit = (student) => {

        setEditId(student.id);

        setName(student.name || "");
        setEmail(student.email || "");
        setPhone(student.phone || "");

        setShowForm(true);

        setMessage("");
    };


    // =========================
    // UPDATE Student
    // =========================

    const handleUpdateStudent = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/students/${editId}`,
                {
                    name,
                    email,
                    phone
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Student updated successfully!");

            clearForm();

            fetchStudents();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to update student"
            );
        }
    };


    // =========================
    // DELETE Student
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/students/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMessage("Student deleted successfully!");

            fetchStudents();

        } catch (error) {

            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to delete student"
            );
        }
    };


    // =========================
    // CLEAR FORM
    // =========================

    const clearForm = () => {

        setName("");
        setEmail("");
        setPhone("");

        setEditId(null);
        setShowForm(false);
    };


    // =========================
    // UI
    // =========================

    return (

        <div className="page-container">

            {/* =========================
                PAGE HEADER
            ========================= */}

            <div className="page-header">

                <div>

                    <h1>Students</h1>

                    <p>
                        Manage students in your academic system
                    </p>

                </div>


                <button
                    className="primary-btn"
                    onClick={() => {
                        clearForm();
                        setShowForm(true);
                    }}
                >
                    + Add Student
                </button>

            </div>


            {/* =========================
                MESSAGE
            ========================= */}

            {message && (

                <div className="page-message">
                    {message}
                </div>

            )}


            {/* =========================
                ADD / EDIT FORM
            ========================= */}

            {showForm && (

                <form
                    className="student-form"
                    onSubmit={
                        editId
                            ? handleUpdateStudent
                            : handleAddStudent
                    }
                >

                    <h2>
                        {editId
                            ? "Edit Student"
                            : "Add Student"
                        }
                    </h2>


                    {/* Student Name */}

                    <input
                        type="text"
                        placeholder="Enter Student Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />


                    {/* Email */}

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />


                    {/* Phone */}

                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                        required
                    />


                    {/* Buttons */}

                    <div className="form-actions">

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            {editId
                                ? "Update Student"
                                : "Add Student"
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


            {/* =========================
                STUDENTS TABLE
            ========================= */}

            <div className="table-card">

                <table className="students-table">

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Actions</th>

                        </tr>

                    </thead>


                    <tbody>

                        {students.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="empty-table"
                                >
                                    No students found
                                </td>

                            </tr>

                        ) : (

                            students.map((student, index) => (

                                <tr key={student.id}>

                                    {/* ID */}

                                    <td>
                                        {index + 1}
                                    </td>


                                    {/* NAME - ONLY ONCE */}

                                    <td>
                                        {student.name}
                                    </td>


                                    {/* EMAIL */}

                                    <td>
                                        {student.email}
                                    </td>


                                    {/* PHONE */}

                                    <td>
                                        {student.phone}
                                    </td>


                                    {/* ACTIONS */}

                                    <td>

                                        <div className="action-buttons">

                                            <button
                                                className="edit-btn"
                                                onClick={() =>
                                                    handleEdit(student)
                                                }
                                            >
                                                Edit
                                            </button>


                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDelete(
                                                        student.id
                                                    )
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

export default Students;