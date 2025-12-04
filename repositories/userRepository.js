// ./repositories/userRepository.js
import db from "./database.js";

export function findUserByPhone(phone) {
  const stmt = db.prepare("SELECT * FROM users WHERE phone = ?");
  return stmt.get(phone); // retorna undefined se não achar
}

export function findUserByIndicationId(indicationId) {
  const stmt = db.prepare("SELECT * FROM users WHERE indicationId = ?");
  return stmt.get(indicationId);
}

export function createUser(userData) {
 try {
  const stmt = db.prepare(`
    INSERT INTO users (indicationId, name, phone, email, password, pixKey, cpf)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(indicationId, name, phone, email, password, pixKey, cpf);

  res.json({ id: result.lastInsertRowid });

} catch (err) {
  if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
    return res.status(400).json({ error: "Registro duplicado" });
  }

  return res.status(500).json({ error: "Erro interno no servidor" });
}

}
