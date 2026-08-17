const db = require("../config/db");

// GET All Faculty
const getAllFaculty = (req, res) => {

    const sql = "SELECT * FROM faculty";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

// ADD Faculty
const addFaculty = (req, res) => {

    const { name, email, department } = req.body;

    const sql = "INSERT INTO faculty (name, email, department) VALUES (?, ?, ?)";

    db.query(sql, [name, email, department], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Faculty added successfully"
        });

    });

};

// UPDATE Faculty
const updateFaculty = (req, res) => {

    const { id } = req.params;
    const { name, email, department } = req.body;

    const sql = "UPDATE faculty SET name = ?, email = ?, department = ? WHERE id = ?";

    db.query(sql, [name, email, department, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.json({
            message: "Faculty updated successfully"
        });

    });

};
// DELETE Faculty
const deleteFaculty = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM faculty WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.json({
            message: "Faculty deleted successfully"
        });

    });

};
const searchFaculty = (req, res) => {

    const { name } = req.query;

    const sql = "SELECT * FROM faculty WHERE name LIKE ?";

    db.query(sql, [`%${name}%`], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};
module.exports = {
    getAllFaculty,
     addFaculty,
     updateFaculty,
     deleteFaculty,
     searchFaculty
};