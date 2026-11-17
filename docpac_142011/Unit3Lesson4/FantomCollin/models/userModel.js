const db = require('./database');

funtion findByUser(){
    return db.prepare(`SELECT * FROM users WHERE username = ?`).get(username);
};

funtion findByEmail(){
    return db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
};

funtion findById(){
    return db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
};

funtion createUser({username, email, password, displayName}){
    const result = db.prepare(`INSERT INTO users (username, email, password, displayName) VALUES (?, ?, ?, ?)`).run(username, email, password, displayName);
    return result.lastInsertRowid;
};

module.exports = { findByUser, findByEmail, findById, createUser }

