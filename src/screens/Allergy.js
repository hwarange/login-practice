import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Button, AgeButton, RoundButton } from "../components";

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

const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const SingleButtonContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 50px; // 추가된 부분: 버튼 간의 간격을 벌립니다.
`;

const Allergy = ({ navigation }) => {

    const handleNextButtonPress = () => {
        navigation.navigate('Prefer');
    };
    const theme = useTheme(); // useTheme 훅을 사용하여 테마를 가져옵니다.
    const handlePress = () => {
        console.log('Button pressed!');};


    return (
        <Container>
            <Title>비건이신가요?</Title>
            <ButtonContainer>
                <AgeButton 
                 onPress={() =>{}} 
                 title="예" 
                 backgroundColor={theme.signupBox}
                 titleColor={theme.background}
                />
                <AgeButton 
                 onPress={() =>{}} 
                 title="아니오" 
                 backgroundColor={theme.background}
                 titleColor={theme.signupBox}
                />
            </ButtonContainer>
            <Title>해당되는 알레르기를{"\n"}선택해주세요</Title>
            <ButtonContainer>
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/egg.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="계란"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/milk.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="우유"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/wheatFlour.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="밀가루"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/peach.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="복숭아"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
            </ButtonContainer>
            <ButtonContainer>
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/fish.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="생선"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/peanut.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="땅콩"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/walnut.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="호두"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/chop.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="돼지고기"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
            </ButtonContainer>
            <ButtonContainer>
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/crab.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="갑각류"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/clam.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="조개"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/squid.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="오징어"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/soybean.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="대두"
                 onPress={handlePress}
                 isFilled={true}
                 backgroundColor="#FFEB3B"
                />
            </ButtonContainer>
            <SingleButtonContainer>
                <Button
                    title="다음"
                    onPress={handleNextButtonPress} // 다음 버튼의 onPress 이벤트에 함수 할당
                    isFilled={false}
                    backgroundColor={theme.signupBox}
                    titleColor={theme.background}
                />
            </SingleButtonContainer>
            
        </Container>
    );
};



export default Allergy;