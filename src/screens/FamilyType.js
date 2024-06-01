import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Button, FamilyButton } from "../components";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 40px 20px;
`;

const FamilyType = ({ navigation }) => {

    const theme = useTheme();
    const handleNextButtonPress = () => { navigation.navigate('Signup') };

    return(
        <Container>
            <FamilyButton
             imageSource={require('../../assets/img.png')}
             onPress={() => {}}
             title="가족 중 처음으로
             가입하는거에요."
             titleColor={theme.loginBox}
            />

            <FamilyButton
             imageSource={require('../../assets/home.png')}
             onPress={() => {}}
             title="가족 중 이미 가입한 사람이 있어요."
             titleColor={theme.loginBox}
            />

            <Button
                title="다음"
                onPress={handleNextButtonPress}
                isFilled={false}
                backgroundColor={theme.signupBox}
                titleColor={theme.background}
            />
        </Container>
    );
};

export default FamilyType;