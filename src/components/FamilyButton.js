
import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: center; /* 중앙 정렬 */
    width: 100%;
    height: 190px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#FCF9F9'};
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Image = styled.Image`
    width: 100px; /* 사진의 너비 조절 */
    height: 100px; /* 사진의 높이 조절 */
    margin-right: 10px; /* 사진과 글씨 사이 간격 조절 */
`;

const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ titleColor, theme }) => titleColor || theme.buttonUnFilledTitle};
    text-align: center;
`;

const FamilyButton = ({ imageSource, title, onPress, titleColor }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Container
            onPress={() => {
                setIsPressed(!isPressed);
                onPress(); // 버튼 클릭 이벤트 처리 함수 호출
            }}
            backgroundColor={isPressed ? '#d6d6d6' : '#FCF9F9'} // 눌렸을 때 배경색 변경
        >
            <Image source={imageSource} resizeMode="contain"/>
            <Title titleColor={titleColor} numberOfLines={2}>{title}</Title>
        </Container>
    );
};

FamilyButton.propTypes = {
    imageSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    titleColor: PropTypes.string,
};

export default FamilyButton;
