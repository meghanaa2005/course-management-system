const dashboardRoutes = require("./routes/dashboardRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const courseRoutes = require("./routes/courseRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log("App Started");

require("./config/db");

console.log("Before Routes");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

console.log("After Routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/faculty", facultyRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.send("Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});