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
    const [isFamilyHave, setIsFamilyHave] = useState(false); // 가족 중 이미 가입한 사람이 있는지 여부

    const handleNextButtonPress = () => {
        navigation.navigate('Signup', { isFamilyHave }); // 다음 화면으로 상태를 전달
    };

    return (
        <Container>
            <FamilyButton
                imageSource={require('../../assets/img.png')}
                onPress={() => setIsFamilyHave(false)} // 가족 중 처음으로 가입하는 경우
                title="가족 중 처음으로 가입하는거에요."
                titleColor={theme.loginBox}
            />

            <FamilyButton
                imageSource={require('../../assets/home.png')}
                onPress={() => setIsFamilyHave(true)} // 이미 가입한 사람이 있는 경우
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
