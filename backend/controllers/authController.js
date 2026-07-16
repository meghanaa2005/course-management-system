const bcrypt = require("bcrypt");
const db = require("../config/db");
const registerUser =  async (req, res) => {
    const { username, email, password } = req.body;

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
     
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "User registered successfully"
        });
    });
};

const loginUser =  async (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";
     
    const isMatch = await bcrypt.compare(password, result[0].password);
    db.query(sql, [email], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        res.json({
            message: "Login successful"
        });
    });
};

module.exports = {
    registerUser,
      loginUser
};