const db = require("../config/db");

// GET - Fetch all students
const getAllStudents = (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error fetching students",
                error: err
            });
        }

        res.status(200).json(result);
    });
};

// POST - Add new student
const addStudent = (req, res) => {
    const { name, email, phone, department, year } = req.body;

    const sql =
        "INSERT INTO students (name, email, phone, department, year) VALUES (?, ?, ?, ?, ?)";

    db.query(
        sql,
        [name, email, phone, department, year],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Error adding student",
                    error: err
                });
            }

            res.status(201).json({
                message: "Student added successfully",
                studentId: result.insertId
            });
        }
    );
};

const updateStudent = (req, res) => {
    const id = req.params.id;

    const { name, email, department } = req.body;

    const sql =
        "UPDATE students SET name = ?, email = ?, department = ? WHERE id = ?";

    db.query(sql, [name, email, department, id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Student updated successfully"
        });
    });
};

const deleteStudent = (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Student deleted successfully"
        });
    });
};

module.exports = {
    getAllStudents,
    addStudent,
     updateStudent,
    deleteStudent
};