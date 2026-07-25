const db = require("../config/db");

// GET All Courses
const getAllCourses = (req, res) => {

    const sql = "SELECT * FROM courses";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

const addCourse = (req, res) => {

    const { course_name, course_code, credits } = req.body;

    const sql = "INSERT INTO courses (course_name, course_code, credits) VALUES (?, ?, ?)";

    db.query(sql, [course_name, course_code, credits], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Course added successfully"
        });

    });

};
 // UPDATE Course
const updateCourse = (req, res) => {

    const { id } = req.params;
    const { course_name, course_code, credits } = req.body;

    const sql = "UPDATE courses SET course_name = ?, course_code = ?, credits = ? WHERE id = ?";

    db.query(sql, [course_name, course_code, credits, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Course updated successfully"
        });

    });

};

// DELETE Course
const deleteCourse = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM courses WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        res.json({
            message: "Course deleted successfully"
        });

    });

};

module.exports = {
    getAllCourses,
      addCourse,
       updateCourse,
       deleteCourse
};