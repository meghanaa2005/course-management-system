const db = require("../config/db");

const getDashboard = (req, res) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM students) AS total_students,
            (SELECT COUNT(*) FROM courses) AS total_courses,
            (SELECT COUNT(*) FROM faculty) AS total_faculty,
            (SELECT COUNT(*) FROM enrollments) AS total_enrollments
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result[0]);
    });
};

module.exports = {
    getDashboard
};