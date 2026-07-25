const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    getAllCourses,
     addCourse,
      updateCourse,
      deleteCourse
} = require("../controllers/courseController");

router.get("/", verifyToken, getAllCourses);
router.post("/", verifyToken, addCourse); 
router.put("/:id", verifyToken, updateCourse);
router.delete("/:id", verifyToken, deleteCourse);
module.exports = router;