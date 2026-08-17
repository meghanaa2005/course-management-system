const db = require("../config/db");

// ADD Enrollment
const addEnrollment = (req, res) => {

    const { student_id, course_id } = req.body;

    // 1. Check empty fields
    if (!student_id || !course_id) {
        return res.status(400).json({
            message: "Student ID and Course ID are required"
        });
    }

    // 2. Check if student exists
    const studentSql = "SELECT id FROM students WHERE id = ?";

    db.query(studentSql, [student_id], (err, studentResult) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (studentResult.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        // 3. Check if course exists
        const courseSql = "SELECT id FROM courses WHERE id = ?";

        db.query(courseSql, [course_id], (err, courseResult) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (courseResult.length === 0) {
                return res.status(404).json({
                    message: "Course not found"
                });
            }

            // 4. Check duplicate enrollment
            const checkSql = `
                SELECT * FROM enrollments
                WHERE student_id = ? AND course_id = ?
            `;

            db.query(
                checkSql,
                [student_id, course_id],
                (err, result) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    if (result.length > 0) {
                        return res.status(409).json({
                            message: "Student is already enrolled in this course"
                        });
                    }

                    // 5. Add enrollment
                    const insertSql = `
                        INSERT INTO enrollments (student_id, course_id)
                        VALUES (?, ?)
                    `;

                    db.query(
                        insertSql,
                        [student_id, course_id],
                        (err, result) => {

                            if (err) {
                                return res.status(500).json(err);
                            }

                            res.status(201).json({
                                message: "Student enrolled successfully"
                            });

                        }
                    );

                }
            );

        });

    });
};
// GET All Enrollments
const getAllEnrollments = (req, res) => {

    const sql = `
        SELECT 
            enrollments.id,
            students.name AS student_name,
            courses.course_name
        FROM enrollments
        JOIN students
            ON enrollments.student_id = students.id
        JOIN courses
            ON enrollments.course_id = courses.id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

const getStudentEnrollments = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT
            enrollments.id,
            students.name AS student_name,
            courses.course_name
        FROM enrollments
        JOIN students
            ON enrollments.student_id = students.id
        JOIN courses
            ON enrollments.course_id = courses.id
        WHERE students.id = ?
    `;

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

// DELETE Enrollment
const deleteEnrollment = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM enrollments WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Enrollment not found"
            });
        }

        res.json({
            message: "Enrollment deleted successfully"
        });
    });
};

module.exports = {
    addEnrollment,
    getAllEnrollments,
     getStudentEnrollments,
     deleteEnrollment
};