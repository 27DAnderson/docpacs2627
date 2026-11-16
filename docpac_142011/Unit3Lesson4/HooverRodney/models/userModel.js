const db = require('../models/database.js');

function createUser(username, email, password, is_active) {
    const sql = `INSERT INTO users (username, email) VALUES (?, ?, ?, ?)`;
    const users = db.prepare(sql).run(username, email, password, is_active);
    return users;
}