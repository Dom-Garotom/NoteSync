import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const USER_ID_KEY = '@auth_user_id';

export const useAuthStorage = () => {
  const saveAuthData = useCallback(async ( userId: string) => {
    try {
      await AsyncStorage.setItem(USER_ID_KEY , userId);
    } catch (error) {
      console.error('Erro ao salvar dados de autenticação:', error);
    }
  }, []);

  const getAuthData = useCallback(async () => {
    try {
      const userId = await AsyncStorage.getItem(USER_ID_KEY);
      return { userId };
    } catch (error) {
      console.error('Erro ao recuperar dados de autenticação:', error);
      return { userId: null };
    }
  }, []);

  const clearAuthData = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(USER_ID_KEY);
    } catch (error) {
      console.error('Erro ao limpar dados de autenticação:', error);
    }
  }, []);

  return {
    saveAuthData,
    getAuthData,
    clearAuthData,
  };
};
