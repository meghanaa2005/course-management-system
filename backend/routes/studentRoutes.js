const verifyToken = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();

const {
    getAllStudents,
    addStudent,
     updateStudent,
    deleteStudent,
     searchStudents
} = require("../controllers/studentController");


console.log(getAllStudents);
console.log(addStudent);  // 👈 Ee line ikkada add cheyyi

router.get("/", verifyToken, getAllStudents);
router.get("/search", verifyToken, searchStudents);
router.post("/",  verifyToken, addStudent);
router.put("/:id",  verifyToken, updateStudent);
router.delete("/:id",  verifyToken, deleteStudent);

module.exports = router;