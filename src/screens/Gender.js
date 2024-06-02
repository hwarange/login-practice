import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import axiosInstance from "../utils/axiosInstance";
import { Button, GenderButton, CustomCheckbox } from "../components";

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

const Gender = ({ navigation, route  }) => {
    const theme = useTheme();
    const [selectedGender, setSelectedGender] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const accessToken = route.params.accessToken;

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        setIsChecked(false); // 성별이 선택되면 체크박스를 해제합니다.
    };

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
        setSelectedGender(null); // 체크박스가 선택되면 성별 선택을 해제합니다.
    };

    const handleNextButtonPress = async () => {
        const gender = isChecked ? 'secret' : selectedGender;
        
        if (gender) {
            try {
                await axiosInstance.post('/member/gender', { gender, accessToken });
                navigation.navigate('Age');
            } catch (error) {
                console.error("성별 데이터를 전송하는 데 실패했습니다", error);
            }
        } else {
            // 성별이 선택되지 않았고 체크박스도 선택되지 않은 경우 처리
            console.error("성별을 선택하거나 성별을 알리고 싶지 않음을 선택하세요");
        }
    };

    return (
        <Container>
            <Title>성별을{"\n"}선택해주세요.</Title>
            <MiniText>성별을 설정하면{"\n"}더 정확한 맞춤 장보기를 제공합니다.</MiniText>
            
            <ButtonContainer>
                <GenderButton
                    onPress={() => { handleGenderSelect('female');
                                     console.log("여성");}}
                    title="여성"
                    imageSource={require("../../assets/female1.png")}
                    backgroundColor={selectedGender === 'female' ? theme.selectedButton : theme.miniText}
                    titleColor={theme.text}
                />
                <GenderButton
                    onPress={() => {handleGenderSelect('male');
                                    console.log("남성");
                    }}
                    title="남성"
                    imageSource={require("../../assets/male1.png")}
                    backgroundColor={selectedGender === 'male' ? theme.selectedButton : theme.miniText}
                    titleColor={theme.text}
                />
            </ButtonContainer>
            <CustomCheckbox
                label="성별을 알리고 싶지 않습니다."
                onPress={handleCheckboxToggle}
                isChecked={isChecked}
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
