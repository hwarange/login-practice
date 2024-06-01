import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
    `;

const StyledImage = styled.Image`
    background-color: ${({ theme }) => theme.background};
    width: 350px;
    height: 200px;
    `;

const Image = ({ url, imageStyle }) => {
    return(
        <Container>
            <StyledImage source={require("../../assets/Logo.png")} style = {imageStyle} />
        </Container>
    );
};

Image.propTypes = {
    uri: PropTypes.string,
    imageStyle: PropTypes.object,
};

export default Image;