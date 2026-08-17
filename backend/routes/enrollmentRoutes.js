const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    addEnrollment,
    getAllEnrollments,
    getStudentEnrollments,
    deleteEnrollment
} = require("../controllers/enrollmentController");


router.post("/", verifyToken, addEnrollment);

router.get("/", verifyToken, getAllEnrollments);
router.get("/student/:id", verifyToken, getStudentEnrollments);
router.delete("/:id", verifyToken, deleteEnrollment);


module.exports = router;