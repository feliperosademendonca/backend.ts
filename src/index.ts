import db from './db';

// Preparar statement de INSERT
const insertUser = db.prepare('INSERT INTO users (name) VALUES (?)');
insertUser.run('Alice');

// SELECT * FROM users
const getUsers = db.prepare('SELECT * FROM users');
const users = getUsers.all();

console.log('Users:', users);
