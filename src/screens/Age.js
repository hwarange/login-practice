import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import axiosInstance from "../utils/axiosInstance";
import { Button, AgeButton } from "../components";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 40px 20px;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 46px;
    align-self: flex-start;
    color: ${({ theme }) => theme.text};
`;

const MiniText = styled.Text`
    font-size: 16px;
    margin-bottom: 72px;
    align-self: flex-start;
    color: ${({ theme }) => theme.miniText};
`;

const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;
const SingleButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 20px; // 추가된 부분: 버튼 간의 간격을 벌립니다.
`;

const Age = ({ navigation }) => {
    const theme = useTheme();
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);

    const handleAgeSelect = (ageGroup) => {
        setSelectedAgeGroup(ageGroup);
    };

    const handleNextButtonPress = async () => {
        if (selectedAgeGroup) {
            try {
                await axiosInstance.post('/member/age-group', { ageGroup: selectedAgeGroup });
                navigation.navigate('Allergy');
            } catch (error) {
                console.error("연령대 데이터를 전송하는 데 실패했습니다", error);
            }
        } else {
            console.error("연령대를 선택하세요");
        }
    };

    return (
        <Container>
            <Title>연령대를{"\n"}선택해주세요</Title>
            <MiniText>나이를 설정하면{"\n"}더 정확한 맞춤 장보기를 제공해드립니다.</MiniText>
            <ButtonContainer>
                <AgeButton title="10대" onPress={() => handleAgeSelect("10대")} />
                <AgeButton title="20대" onPress={() => handleAgeSelect("20대")} />
            </ButtonContainer>
            <ButtonContainer>
                <AgeButton title="30대" onPress={() => handleAgeSelect("30대")} />
                <AgeButton title="40대" onPress={() => handleAgeSelect("40대")} />
            </ButtonContainer>
            <ButtonContainer>
                <AgeButton title="50대" onPress={() => handleAgeSelect("50대")} />
                <AgeButton title="60대" onPress={() => handleAgeSelect("60대")} />
            </ButtonContainer>
            <SingleButtonContainer>
                <AgeButton title="60대 이상" onPress={() => handleAgeSelect("60대 이상")} />
            </SingleButtonContainer>
            
            <Button
                title="다음"
                onPress={handleNextButtonPress}
                isFilled={false}
                backgroundColor={theme.signupBox} // theme에서 가져온 색상을 사용합니다.
                titleColor={theme.background} // theme에서 가져온 색상을 사용합니다.
            />
        </Container>
    );
};

export default Age;
