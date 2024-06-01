import React, { useState, useRef, useEffect } from "react";
import styled, { useTheme } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/commmon";
import { Input, Button } from "../components";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 40px 20px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    align-self: flex-start;
    color: ${({ theme }) => theme.text};
`;

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText};
`;

const Signup = ({ navigation }) => {
    const theme = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [disabled, setDisabled] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const didMountRef = useRef();

    useEffect(() => {
        if (didMountRef.current) {
            let _errorMessage = '';
            if (!name) {
                _errorMessage = 'Please enter your name.';
            } else if (!validateEmail(email)) {
                _errorMessage = 'Please verify your email.';
            } else if (password.length < 6) {
                _errorMessage = 'The password must contain 6 characters at least.';
            } else if (password !== passwordConfirm) {
                _errorMessage = 'Passwords need to match.';
            } else {
                _errorMessage = '';
            }
            setErrorMessage(_errorMessage);
        } else {
            didMountRef.current = true;
        }
    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        setDisabled(
            !(name && email && password && passwordConfirm && !errorMessage)
        );
    }, [name, email, password, passwordConfirm, errorMessage]);

    // 다음 버튼을 눌렀을 때 실행되는 함수
    const handleNextButtonPress = () => {
        if (name && email && password && passwordConfirm && !errorMessage) {
            navigation.navigate('Gender');
        } else {
            console.log("Please fill in all required fields correctly.");
        }
    };

    return (
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <Container>
                <Title>회원가입</Title>
                <Input
                    label='이름'
                    value={name}
                    onChangeText={text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim());
                        emailRef.current.focus();
                    }}
                    onBlur={() => setName(name.trim())}
                    placeholder='이름'
                    returnKeyType='next'
                />
                <Input
                    ref={emailRef}
                    label='아이디'
                    value={email}
                    onChangeText={text => setEmail(removeWhitespace(text))}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder='아이디'
                    returnKeyType='next'
                />
                <Input
                    ref={passwordRef}
                    label='비밀번호'
                    value={password}
                    onChangeText={text => setPassword(removeWhitespace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder='비밀번호'
                    returnKeyType='done'
                    isPassword
                />
                <Input
                    ref={passwordConfirmRef}
                    label='비밀번호 확인'
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
                    onSubmitEditing={() => {
                        if (!disabled) {
                            navigation.navigate('Gender');
                        }
                    }}
                    placeholder='비밀번호 확인'
                    returnKeyType='done'
                    isPassword
                />
                <ErrorText>{errorMessage}</ErrorText>
                <Button
                    title="다음"
                    onPress={handleNextButtonPress} // 다음 버튼의 onPress 이벤트에 함수 할당
                    disabled={disabled}
                    isFilled={false}
                    backgroundColor={theme.signupBox}
                    titleColor={theme.background}
                />
            </Container>
        </KeyboardAwareScrollView>
    );
};

export default Signup;
