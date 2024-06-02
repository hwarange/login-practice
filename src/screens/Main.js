import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLogin } from '../contexts/LoginContext';

const Main = ( ) => {
  const { setIsLoggedIn } = useLogin();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      setIsLoggedIn(false); // 로그아웃 시 로그인 상태를 false로 변경
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <View>
      <Text>Main Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Main;
