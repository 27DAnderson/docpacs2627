const db = require('./database');

function findByUser(username){
    return db.prepare(`SELECT * FROM users WHERE username = ?`).get(username);
};

function findByEmail(email){
    return db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
};

function findById(id){
    return db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
};

function createUser({username, email, password, displayName}){
    const result = db.prepare(`INSERT INTO users (username, email, password, displayName) VALUES (?, ?, ?, ?)`)
    .run(username, email, password, displayName);
    return result.lastInsertRowid;
};

module.exports = { findByUser, findByEmail, findById, createUser }

