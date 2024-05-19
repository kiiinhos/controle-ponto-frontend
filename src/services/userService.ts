import api from "../utils/api";

export const getUserByCode = async (userCode: string) => {
  try {
    const response = await api.get(`/users/${userCode}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar usuário.");
  }
};

export const registerEntry = async (userCode: string) => {
  try {
    const response = await api.post("/registers/entry", { userCode });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao registrar entrada.");
  }
};

export const registerExit = async (userCode: string) => {
  try {
    const response = await api.post("/registers/exit", { userCode });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao registrar saída.");
  }
};
