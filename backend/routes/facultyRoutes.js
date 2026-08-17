const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
    getAllFaculty,
     addFaculty,
     updateFaculty,
     deleteFaculty,
     searchFaculty
} = require("../controllers/facultyController");


router.get("/", verifyToken, getAllFaculty);
router.post("/", verifyToken, addFaculty);
router.get("/search", verifyToken, searchFaculty);
router.put("/:id", verifyToken, updateFaculty);
router.delete("/:id", verifyToken, deleteFaculty);


module.exports = router;