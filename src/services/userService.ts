import api from "../utils/api";

export const getUserByCode = async (userCode: string) => {
  try {
    const response = await api.get(`/check-point/users/${userCode}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar usuário.");
  }
};
