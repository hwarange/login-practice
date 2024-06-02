import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { ScrollView } from "react-native";
import { Button, TextButton } from "../components";
import axiosInstance from "../utils/axiosInstance";

const Container = styled.View`
  flex: 1;
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
  margin-bottom: 10px; 
`;

const Prefer = () => {
  const theme = useTheme(); 
  const [preferredCuisine, setPreferredCuisine] = useState(null);
  const [nonPreferredCuisine, setNonPreferredCuisine] = useState(null);
  const [preferredIngredient, setPreferredIngredient] = useState(null);
  const [nonPreferredIngredient, setNonPreferredIngredient] = useState(null);

  const handleNextButtonPress = async () => {
    const data = {
      preferredCuisine,
      nonPreferredCuisine,
      preferredIngredient,
      nonPreferredIngredient
    };

    try {
      const response = await axiosInstance.post('/members/preferred', data);
      console.log(response.data); // 서버로부터의 응답을 출력합니다.
      // 회원가입 페이지로 이동하는 코드는 여기에 추가하세요.
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "서버로 데이터를 전송하는 중 오류가 발생했습니다.");
    }
  };

  const handlePreferenceSelect = (type, value) => {
    switch (type) {
      case "preferredCuisine":
        setPreferredCuisine(value);
        break;
      case "nonPreferredCuisine":
        setNonPreferredCuisine(value);
        break;
      case "preferredIngredient":
        setPreferredIngredient(value);
        break;
      case "nonPreferredIngredient":
        setNonPreferredIngredient(value);
        break;
      default:
        break;
    }
  };



  return (
    <Container>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Title>가장 선호하는 음식종류 1개!</Title>
        <ButtonContainer>
          <TextButton 
            label="한식" 
            titleColor={preferredCuisine === "한식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "한식")}
          />

          <TextButton 
            label="양식" titleColor={preferredCuisine === "양식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "양식")}
          />
          <TextButton label="중식" titleColor={preferredCuisine === "중식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "중식")}/>
          <TextButton label="일식" titleColor={preferredCuisine === "일식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "일식")}/>
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="분식" titleColor={preferredCuisine === "분식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "분식")}/>
          <TextButton label="디저트" titleColor={preferredCuisine === "디저트" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "디저트")}/>
          <TextButton label="아시아 음식" titleColor={preferredCuisine === "아시아 음식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredCuisine", "아시아 음식")}/>
        </ButtonContainer>
        
        <Title>가장 선호하지 않는 음식종류 1개!</Title>
        <ButtonContainer>
        <TextButton 
            label="한식" 
            titleColor={nonPreferredCuisine === "한식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "한식")}
          />
          <TextButton 
            label="양식" 
            titleColor={nonPreferredCuisine === "양식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "양식")}
          />
          <TextButton 
            label="중식" 
            titleColor={nonPreferredCuisine === "중식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "중식")}
          />
          <TextButton 
            label="일식" 
            titleColor={nonPreferredCuisine === "일식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "일식")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="분식" 
            titleColor={nonPreferredCuisine === "분식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "분식")}
          />
          <TextButton 
            label="디저트" 
            titleColor={nonPreferredCuisine === "디저트" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "디저트")}
          />
          <TextButton 
            label="아시아 음식" 
            titleColor={nonPreferredCuisine === "아시아 음식" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredCuisine", "아시아 음식")}
          />
        </ButtonContainer>


        <Title>가장 선호하시는 식재료를{"\n"}선택해주세요 1개!</Title>
        <ButtonContainer>
        <TextButton 
            label="달걀" 
            titleColor={preferredIngredient === "달걀" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "달걀")}
          />
          <TextButton 
            label="닭" 
            titleColor={preferredIngredient === "닭" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "닭")}
          />
          <TextButton 
            label="소고기" 
            titleColor={preferredIngredient === "소고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "소고기")}
          />
          <TextButton 
            label="생선" 
            titleColor={preferredIngredient === "생선" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "생선")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="우유" 
            titleColor={preferredIngredient === "우유" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "우유")}
          />
          <TextButton 
            label="돼지고기" 
            titleColor={preferredIngredient === "돼지고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "돼지고기")}
          />
          <TextButton 
            label="오리고기" 
            titleColor={preferredIngredient === "오리고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "오리고기")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="당근" 
            titleColor={preferredIngredient === "당근" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "당근")}
          />
          <TextButton 
            label="조개" 
            titleColor={preferredIngredient === "조개" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "조개")}
          />
          <TextButton 
            label="가지" 
            titleColor={preferredIngredient === "가지" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "가지")}
          />
          <TextButton 
            label="양고기" 
            titleColor={preferredIngredient === "양고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "양고기")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="양파" 
            titleColor={preferredIngredient === "양파" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "양파")}
          />
          <TextButton 
            label="피망" 
            titleColor={preferredIngredient === "피망" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "피망")}
          />
          <TextButton 
            label="고수" 
            titleColor={preferredIngredient === "고수" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "고수")}
          />
          <TextButton 
            label="조개" 
            titleColor={preferredIngredient === "조개" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "조개")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="치즈" 
            titleColor={preferredIngredient === "치즈" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "치즈")}
          />
          <TextButton 
            label="마늘" 
            titleColor={preferredIngredient === "마늘" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "마늘")}
          />
          <TextButton 
            label="파" 
            titleColor={preferredIngredient === "파" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("preferredIngredient", "파")}
          />
        </ButtonContainer>

        <Title>가장 선호하지 않는 식재료를{"\n"}선택해주세요 1개!</Title>
        <ButtonContainer>
        <TextButton 
            label="달걀" 
            titleColor={preferredIngredient === "달걀" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "달걀")}
          />
          <TextButton 
            label="닭" 
            titleColor={preferredIngredient === "닭" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "닭")}
          />
          <TextButton 
            label="소고기" 
            titleColor={preferredIngredient === "소고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "소고기")}
          />
          <TextButton 
            label="생선" 
            titleColor={preferredIngredient === "생선" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "생선")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="우유" 
            titleColor={preferredIngredient === "우유" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "우유")}
          />
          <TextButton 
            label="돼지고기" 
            titleColor={preferredIngredient === "돼지고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "돼지고기")}
          />
          <TextButton 
            label="오리고기" 
            titleColor={preferredIngredient === "오리고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "오리고기")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="당근" 
            titleColor={preferredIngredient === "당근" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "당근")}
          />
          <TextButton 
            label="조개" 
            titleColor={preferredIngredient === "조개" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "조개")}
          />
          <TextButton 
            label="가지" 
            titleColor={preferredIngredient === "가지" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "가지")}
          />
          <TextButton 
            label="양고기" 
            titleColor={preferredIngredient === "양고기" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "양고기")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="양파" 
            titleColor={preferredIngredient === "양파" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "양파")}
          />
          <TextButton 
            label="피망" 
            titleColor={preferredIngredient === "피망" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "피망")}
          />
          <TextButton 
            label="고수" 
            titleColor={preferredIngredient === "고수" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "고수")}
          />
          <TextButton 
            label="조개" 
            titleColor={preferredIngredient === "조개" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "조개")}
          />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton 
            label="치즈" 
            titleColor={preferredIngredient === "치즈" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "치즈")}
          />
          <TextButton 
            label="마늘" 
            titleColor={preferredIngredient === "마늘" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "마늘")}
          />
          <TextButton 
            label="파" 
            titleColor={preferredIngredient === "파" ? theme.selectedColor : "grey"} 
            onPress={() => handlePreferenceSelect("nonPreferredIngredient", "파")}
          />
        </ButtonContainer>

        <Button
          title="회원가입"
          onPress={handleNextButtonPress} 
          isFilled={false}
          backgroundColor={theme.endBox}
          titleColor={theme.background}
        />
      </ScrollView>
    </Container>
  );
};

export default Prefer;
