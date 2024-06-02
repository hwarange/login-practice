import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Button, AgeButton, RoundButton } from "../components";
import axiosInstance from "../utils/axiosInstance";

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
    const theme = useTheme();

    // 비건 여부를 저장하는 상태
    const [isVegan, setIsVegan] = useState(null);
    // 알레르기 종류를 저장하는 상태 배열
    const [selectedAllergies, setSelectedAllergies] = useState([]);

    // 비건 버튼 클릭 시
    const handleVeganButtonPress = (vegan) => {
        setIsVegan(vegan);
    };

    // 알레르기 버튼 클릭 시
    const handleAllergyButtonPress = (allergy) => {
        // 이미 선택된 알레르기라면 선택 해제, 아니면 추가
        if (selectedAllergies.includes(allergy)) {
            setSelectedAllergies(selectedAllergies.filter(item => item !== allergy));
        } else {
            setSelectedAllergies([...selectedAllergies, allergy]);
        }
    };

    // 다음 버튼 클릭 시
    const handleNextButtonPress = async () => {
        const data = {
            isVegan: isVegan,
            allergyType: selectedAllergies
        };
        try {
            // axios를 사용하여 서버로 데이터를 전송합니다.
            await axiosInstance.post('/members/vegan/allergies/type', data);
            console.log("데이터 전송 성공:", data);
            navigation.navigate('Prefer');
        } catch (error) {
            console.error("데이터 전송 실패:", error);
        }
    };


    return (
        <Container>
            <Title>비건이신가요?</Title>
            <ButtonContainer>
                <AgeButton 
                 onPress={() =>{handleVeganButtonPress(true)}} 
                 title="예" 
                 backgroundColor={theme.signupBox}
                 titleColor={theme.background}
                />
                <AgeButton 
                 onPress={() =>{handleVeganButtonPress(false)}} 
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
                 onPress={() => {handleAllergyButtonPress("계란")}}
                 isFilled={selectedAllergies.includes("계란")}
                 backgroundColor={selectedAllergies.includes("계란") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/milk.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="우유"
                 onPress={() => {handleAllergyButtonPress("우유")}}
                 isFilled={selectedAllergies.includes("우유")}
                 backgroundColor={selectedAllergies.includes("우유") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/wheatFlour.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="밀가루"
                 onPress={() => {handleAllergyButtonPress("밀가루")}}
                 isFilled={selectedAllergies.includes("밀가루")}
                 backgroundColor={selectedAllergies.includes("밀가루") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/peach.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="복숭아"
                 onPress={() => {handleAllergyButtonPress("복숭아")}}
                 isFilled={selectedAllergies.includes("복숭아")}
                 backgroundColor={selectedAllergies.includes("복숭아") ? "#FFEB3B" : "#FFFFFF"}
                />
            </ButtonContainer>
            <ButtonContainer>
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/fish.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="생선"
                 onPress={() => {handleAllergyButtonPress("생선")}}
                 isFilled={selectedAllergies.includes("생선")}
                 backgroundColor={selectedAllergies.includes("생선") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/peanut.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="땅콩"
                 onPress={() => {handleAllergyButtonPress("땅콩")}}
                 isFilled={selectedAllergies.includes("땅콩")}
                 backgroundColor={selectedAllergies.includes("땅콩") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/walnut.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="호두"
                 onPress={() => {handleAllergyButtonPress("호두")}}
                 isFilled={selectedAllergies.includes("호두")}
                 backgroundColor={selectedAllergies.includes("호두") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/chop.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="돼지고기"
                 onPress={() => {handleAllergyButtonPress("돼지고기")}}
                 isFilled={selectedAllergies.includes("돼지고기")}
                 backgroundColor={selectedAllergies.includes("돼지고기") ? "#FFEB3B" : "#FFFFFF"}
                />
            </ButtonContainer>
            <ButtonContainer>
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/crab.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="갑각류"
                 onPress={() => {handleAllergyButtonPress("갑각류")}}
                 isFilled={selectedAllergies.includes("갑각류")}
                 backgroundColor={selectedAllergies.includes("갑각류") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/clam.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="조개"
                 onPress={() => {handleAllergyButtonPress("조개")}}
                 isFilled={selectedAllergies.includes("조개")}
                 backgroundColor={selectedAllergies.includes("조개") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/squid.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="오징어"
                 onPress={() => {handleAllergyButtonPress("오징어")}}
                 isFilled={selectedAllergies.includes("오징어")}
                 backgroundColor={selectedAllergies.includes("오징어") ? "#FFEB3B" : "#FFFFFF"}
                />
                <RoundButton
                 imageSource={require("../../assets/Allergy_icon/soybean.png")}
                 containerStyle={{ marginBottom: 20 }}
                 label="대두"
                 onPress={() => {handleAllergyButtonPress("대두")}}
                 isFilled={selectedAllergies.includes("대두")}
                 backgroundColor={selectedAllergies.includes("대두") ? "#FFEB3B" : "#FFFFFF"}
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