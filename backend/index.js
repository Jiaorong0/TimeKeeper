const express = require('express'); // Start the backend: In the my-backend directory, run node index.js.
const mysql = require('mysql'); // Start the React app: In the my-react-app directory, run npm start.
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my-secret-pw',
    database: 'b15_35163375_test'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)`, (err) => {
    if (err) throw err;
    console.log('Users table created or already exists.');
});


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoint to fetch all users
app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.json({users: rows});
    });
});


// Endpoint to insert new users
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).json({
            success: false,
            error: "Username, email, and password are required"
        });
        return;
    }

    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], (err, result) => {
        if (err) {
            console.error('Database operation error:', err);
            res.status(500).json({
                success: false,
                error: err.message
            });
            return;
        }
        res.json({
            success: true,
            id: result.insertId  // Get the inserted ID from the MySQL result
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: "Email and password are required"
        });
    }

    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }

        if (result.length > 0) {
            return res.json({
                success: true,
                message: "Login successful"
            });
        } else {
            return res.status(401).json({
                success: false,
                error: "Invalid credentials"
            });
        }
    });
});

db.on('error', (err) => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        // Reconnect or handle disconnection
    } else {
        throw err;
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
