import axios from "../utils/api";

export const getUserByCode = async (userCode: string) => {
  try {
    const response = await axios.get(`/check-point/users/${userCode}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar usuário.");
  }
};
