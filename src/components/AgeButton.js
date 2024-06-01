import React, { useState } from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    align-items: center;
    width: 45%;
    height: 50px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ backgroundColor, pressed }) => pressed ? '#d3d3d3' : backgroundColor || '#ffffff'};
    margin-bottom: 20px;
    border:2px solid ${({ theme }) => theme.borderColor || '#D9D9D9'}; ;
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ titleColor, theme }) => titleColor || 'black'};
`;

const AgeButton = ({ title, onPress, backgroundColor, titleColor }) => {
    const [pressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(!pressed);
        onPress(); // 이 부분은 onPress 함수를 호출합니다. 버튼을 클릭할 때 원하는 동작을 실행하려면 이 함수를 정의해야 합니다.
    };

    return (
        <Container onPress={handlePress} backgroundColor={backgroundColor} pressed={pressed}>
            <Title titleColor={titleColor}>{title}</Title>
        </Container>
    );
};

AgeButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
};

export default AgeButton;
