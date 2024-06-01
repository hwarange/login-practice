import React from "react";

import styled from "styled-components/native";
import PropTypes from 'prop-types';

const Container = styled.TouchableOpacity`
    align-items: center;
    width: 40%;
    height: 190px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${({ backgroundColor }) => backgroundColor || '#FCF9F9'};
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Image = styled.Image`
    width: 80%;
    height: 80%;
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ titleColor, theme }) => titleColor || theme.buttonUnFilledTitle};
`;

const GenderButton = ({ imageSource, title, onPress, backgroundColor, titleColor }) => {
    return (
        <Container onPress={onPress} backgroundColor={backgroundColor}>
            {imageSource && (
                <Image source={imageSource} resizeMode="contain"/>
            )}
            <Title titleColor={titleColor}>{title}</Title>
        </Container>
    );
};

GenderButton.propTypes = {
    imageSource: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
};

export default GenderButton;
