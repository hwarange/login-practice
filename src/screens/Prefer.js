import React from "react";
import styled, { useTheme } from "styled-components/native";
import { ScrollView } from "react-native";
import { Button, TextButton } from "../components";

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
  return (
    <Container>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Title>선호음식종류</Title>
        <ButtonContainer>
          <TextButton label="한식" titleColor="grey" />
          <TextButton label="양식" titleColor="grey" />
          <TextButton label="중식" titleColor="grey" />
          <TextButton label="일식" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="분식" titleColor="grey" />
          <TextButton label="디저트" titleColor="grey" />
          <TextButton label="아시아 음식" titleColor="grey" />
        </ButtonContainer>
        
        <Title>선호하지 않는 음식종류</Title>
        <ButtonContainer>
          <TextButton label="한식" titleColor="grey" />
          <TextButton label="양식" titleColor="grey" />
          <TextButton label="중식" titleColor="grey" />
          <TextButton label="일식" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="분식" titleColor="grey" />
          <TextButton label="디저트" titleColor="grey" />
          <TextButton label="아시아 음식" titleColor="grey" />
        </ButtonContainer>


        <Title>선호하시는 식재료를{"\n"}선택해주세요</Title>
        <ButtonContainer>
          <TextButton label="달걀" titleColor="grey" />
          <TextButton label="닭" titleColor="grey" />
          <TextButton label="소고기" titleColor="grey" />
          <TextButton label="생선" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
            <TextButton label="우유" titleColor="grey" />
            <TextButton label="돼지고기" titleColor="grey" />
            <TextButton label="오리고기" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="당근" titleColor="grey" />
          <TextButton label="조개" titleColor="grey" />
          <TextButton label="가지" titleColor="grey" />
          <TextButton label="양고기" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="양파" titleColor="grey" />
          <TextButton label="피망" titleColor="grey" />
          <TextButton label="고수" titleColor="grey" />
          <TextButton label="조개" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="치즈" titleColor="grey" />
          <TextButton label="마늘" titleColor="grey" />
          <TextButton label="파" titleColor="grey" />
        </ButtonContainer>

        <Title>선호하지 않는 식재료를{"\n"}선택해주세요</Title>
        <ButtonContainer>
          <TextButton label="달걀" titleColor="grey" />
          <TextButton label="닭" titleColor="grey" />
          <TextButton label="소고기" titleColor="grey" />
          <TextButton label="생선" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="우유" titleColor="grey" />
          <TextButton label="돼지고기" titleColor="grey" />
          <TextButton label="오리고기" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="당근" titleColor="grey" />
          <TextButton label="조개" titleColor="grey" />
          <TextButton label="가지" titleColor="grey" />
          <TextButton label="양고기" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="양파" titleColor="grey" />
          <TextButton label="피망" titleColor="grey" />
          <TextButton label="고수" titleColor="grey" />
          <TextButton label="조개" titleColor="grey" />
        </ButtonContainer>
        <ButtonContainer>
          <TextButton label="치즈" titleColor="grey" />
          <TextButton label="마늘" titleColor="grey" />
          <TextButton label="파" titleColor="grey" />
        </ButtonContainer>

        <Button
          title="회원가입"
          onPress={() => {}} 
          isFilled={false}
          backgroundColor={theme.endBox}
          titleColor={theme.background}
        />
      </ScrollView>
    </Container>
  );
};

export default Prefer;
