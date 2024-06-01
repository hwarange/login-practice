import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Button, GenderButton, CustomCheckbox} from "../components"; 

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

const MiniText = styled.Text`
    font-size: 12px;
    margin-bottom: 20px;
    align-self: flex-start;
    color: ${({ theme }) => theme.miniText};
`;

const ButtonContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const Gender = ({ navigation }) => {
    const theme = useTheme();
    const [selectedGender, setSelectedGender] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
    };

    const handleToggle = () => {
        setSelectedGender(null); // No gender selected
    };

    const handleNextButtonPress = () => { navigation.navigate('Age') };

    return (
        <Container>
            <Title>성별을{"\n"}선택해주세요.</Title>
            <MiniText>성별을 설정하면{"\n"}더 정확한 맞춤 장보기를 제공합니다.</MiniText>
            
            <ButtonContainer>
                <GenderButton
                    onPress={() => handleGenderSelect('female')}
                    title="여성"
                    imageSource={require("../../assets/female1.png")}
                    backgroundColor={theme.miniText}
                    titleColor={theme.text}
                />
                <GenderButton
                    onPress={() => handleGenderSelect('male')}
                    title="남성"
                    imageSource={require("../../assets/male1.png")}
                    backgroundColor={theme.miniText}
                    titleColor={theme.text}
                />
            </ButtonContainer>
            <CustomCheckbox
                label="성별을 알리고 싶지 않습니다."
                onPress={()=>{}}
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

export default Gender;
