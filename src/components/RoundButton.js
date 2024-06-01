import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const RoundButton = ({
  containerStyle,
  imageSource,
  label,
  onPress = () => {},
  isFilled = false,
  backgroundColor = '#fff',
  titleColor = 'black',
  pressedBackgroundColor = '#FFD700' // 누를 때 배경색을 추가 매개변수로 받습니다.
}) => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: pressed ? (isFilled ? pressedBackgroundColor : '#d3d3d3') : (isFilled ? '#fff' : backgroundColor) }
        ]}
        onPress={handlePress}
      >
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <Text style={[styles.label, { color: titleColor }]}>{label}</Text>
    </View>
  );
};

RoundButton.propTypes = {
  containerStyle: PropTypes.object,
  imageSource: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isFilled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  pressedBackgroundColor: PropTypes.string, // PropTypes에 추가합니다.
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: 57.19,
    height: 57.19,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d6d6d6', // 기본 회색 border 색깔로 설정합니다.

  },
  image: {
    width: 31,
    height: 31,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#d6d6d6',
  },
});

export default RoundButton;
