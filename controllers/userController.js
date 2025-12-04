// ./controllers/userController.js
import { 
  findUserByPhone,
  findUserByIndicationId,
  createUser
} from "../repositories/userRepository.js";

export const createUserController = (req, res) => {
  const { name, phone, password, indicationId, email } = req.body;

  // 1. Verifica duplicidade de phone
  const userExistByPhone = findUserByPhone(phone);
  if (userExistByPhone) {
    return res.status(400).json({ error: "Telefone já cadastrado" });
  }

  // 2. Verifica duplicidade de indicationId
  const userExistByIndication = findUserByIndicationId(indicationId);
  if (userExistByIndication) {
    return res.status(400).json({ error: "Código de indicação já cadastrado" });
  }

  // 3. Insere novo usuário
  const userId = createUser({
    name,
    phone,
    email: email || null,
    password,
    indicationId,
  });

  return res.status(201).json({
    message: "Usuário criado com sucesso",
    userId,
  });
};
