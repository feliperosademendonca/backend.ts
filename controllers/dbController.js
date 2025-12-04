import db from "../repositories/database.js";
 export const createUser = (req   , res ) => {
  const { name, phone, email, password } = req.body;

  const stmt = db.prepare(
    "INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)"
  );

  const result = stmt.run(name, phone, email, password);

  res.json({ id: result.lastInsertRowid });
};
