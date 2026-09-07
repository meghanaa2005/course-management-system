import { useEffect, useState } from "react";
import axios from "axios";

function Faculty() {
    const [faculty, setFaculty] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");

    const [editId, setEditId] = useState(null);
    const [message, setMessage] = useState("");

    // =========================
    // GET FACULTY
    // =========================

    const fetchFaculty = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/faculty",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setFaculty(response.data);
        } catch (error) {
            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to load faculty"
            );
        }
    };

    useEffect(() => {
        fetchFaculty();
    }, []);

    // =========================
    // ADD FACULTY
    // =========================

    const handleAddFaculty = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/faculty",
                {
                    name,
                    email,
                    department,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage("Faculty added successfully!");

            clearForm();
            fetchFaculty();
        } catch (error) {
            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to add faculty"
            );
        }
    };

    // =========================
    // EDIT FACULTY
    // =========================

    const handleEdit = (member) => {
        setEditId(member.id);

        setName(member.name || "");
        setEmail(member.email || "");
        setDepartment(member.department || "");

        setShowForm(true);
        setMessage("");
    };

    // =========================
    // UPDATE FACULTY
    // =========================

    const handleUpdateFaculty = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/faculty/${editId}`,
                {
                    name,
                    email,
                    department,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage("Faculty updated successfully!");

            clearForm();
            fetchFaculty();
        } catch (error) {
            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to update faculty"
            );
        }
    };

    // =========================
    // DELETE FACULTY
    // =========================

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this faculty?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/faculty/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage("Faculty deleted successfully!");

            fetchFaculty();
        } catch (error) {
            console.log(error);

            setMessage(
                error.response?.data?.message ||
                "Failed to delete faculty"
            );
        }
    };

    // =========================
    // CLEAR FORM
    // =========================

    const clearForm = () => {
        setName("");
        setEmail("");
        setDepartment("");

        setEditId(null);
        setShowForm(false);
    };

    // =========================
    // OPEN ADD FORM
    // =========================

    const openAddForm = () => {
        setName("");
        setEmail("");
        setDepartment("");

        setEditId(null);
        setMessage("");

        setShowForm(true);
    };

    // =========================
    // UI
    // =========================

    return (
        <div className="page-container">

            {/* PAGE HEADER */}

            <div className="page-header">
                <div>
                    <h1>Faculty</h1>
                    <p>Manage faculty members</p>
                </div>

                <button
                    className="primary-btn"
                    onClick={openAddForm}
                >
                    + Add Faculty
                </button>
            </div>

            {/* MESSAGE */}

            {message && (
                <div className="page-message">
                    {message}
                </div>
            )}

            {/* ADD / EDIT FORM */}

            {showForm && (
                <form
                    className="student-form"
                    onSubmit={
                        editId
                            ? handleUpdateFaculty
                            : handleAddFaculty
                    }
                >
                    <h2>
                        {editId ? "Edit Faculty" : "Add Faculty"}
                    </h2>

                    <input
                        type="text"
                        placeholder="Enter Faculty Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                    />

                    <input
                        type="text"
                        placeholder="Enter Department"
                        value={department}
                        onChange={(e) =>
                            setDepartment(e.target.value)
                        }
                        required
                    />

                    <div className="form-actions">

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            {editId
                                ? "Update Faculty"
                                : "Add Faculty"}
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

            {/* FACULTY TABLE */}

            <div className="table-card">

                <table className="students-table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {faculty.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="empty-table"
                                >
                                    No faculty members found
                                </td>
                            </tr>
                        ) : (
                            faculty.map((member, index) => (
                                <tr key={member.id}>

                                    <td>{index + 1}</td>

                                    {/* NAME ONLY */}
                                    <td>{member.name}</td>

                                    <td>{member.email}</td>

                                    <td>{member.department}</td>

                                    <td>
                                        <div className="action-buttons">

                                            <button
                                                className="edit-btn"
                                                onClick={() =>
                                                    handleEdit(member)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDelete(member.id)
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

export default Faculty;