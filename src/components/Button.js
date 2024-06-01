import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
    background-color: ${({ theme, isFilled, backgroundColor }) =>
        backgroundColor ? backgroundColor : (isFilled ? theme.buttonBackground : TRANSPARENT)};
    align-items: center;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: ${({ theme, isFilled, titleColor }) =>
        titleColor ? titleColor : (isFilled ? theme.buttonTitle : theme.buttonUnFilledTitle)};
`;

const Button = ({ containerStyle, title, onPress, isFilled = true, backgroundColor, titleColor }) => {
    return (
        <Container 
            style={containerStyle} 
            onPress={onPress} 
            isFilled={isFilled} 
            backgroundColor={backgroundColor}
        >
            <Title isFilled={isFilled} titleColor={titleColor}>{title}</Title>
        </Container>
    );
};

Button.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
};

export default Button;
