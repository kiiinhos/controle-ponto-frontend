import api from "../utils/api";
import { Entry, Exit } from "../types/types";

export const registerEntry = async (
  userCode: string,
  hourEntry: string,
  dateEntry: string
): Promise<Entry> => {
  try {
    const response = await api.post("/registers/entry", {
      userCode,
      hourEntry,
      dateEntry,
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao registrar entrada.");
  }
};

export const registerExit = async (
  userCode: string,
  hourExit: string,
  dateExit: string
): Promise<Exit> => {
  try {
    const response = await api.post("/registers/exit", {
      userCode,
      hourExit,
      dateExit,
    });
    return response.data;
  } catch (error) {
    throw new Error("Erro ao registrar saída.");
  }
};

export const getEntriesByUserCode = async (
  userCode: string
): Promise<Entry[]> => {
  try {
    const response = await api.get(`/registers/entry/${userCode}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar registros de entrada.");
  }
};

export const getExitsByUserCode = async (userCode: string): Promise<Exit[]> => {
  try {
    const response = await api.get(`/registers/exit/${userCode}`);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar registros de saída.");
  }
};
