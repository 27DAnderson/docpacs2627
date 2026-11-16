const db = require('./database');

const findByUser = db.prepare(
    `SELECT id, username, email, password, created_at 
    FROM users
    WHERE username = (query)`
).get(query)