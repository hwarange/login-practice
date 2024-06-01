// Login.js

import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Image, Input, Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/commmon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axiosInstance from '../utils/axiosInstance'; // 수정된 부분

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const insets = useSafeAreaInsets();

  const _handleLoginButtonPress = async () => {
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password
      });
      const accessToken = response.data.accessToken;
      if (accessToken) {
        await AsyncStorage.setItem('accessToken', accessToken);
        navigation.navigate('Allergy');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
    }
  };

  const _handleEmailChange = email => {
    const changedEmail = removeWhitespace(email);
    setEmail(changedEmail);
    setErrorMessage(
      validateEmail(changedEmail) ? '' : 'Please verify your email.'
    );
  };

  const _handlePasswordChange = password => {
    setPassword(removeWhitespace(password));
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container insets={insets}>
        <Image />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="아이디"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="비밀번호"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button title="로그인" onPress={_handleLoginButtonPress} />
        <Button
          title="회원가입"
          onPress={() => navigation.navigate('FamilyType')}
          isFilled={false}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
