import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TextButton = ({
  containerStyle,
  label,
  onPress = () => {},
  isFilled = false,
  backgroundColor = '#fff',
  titleColor = '#000',
  pressedBackgroundColor = '#FFD700'
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
        <Text style={[styles.label, { color: titleColor }]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

TextButton.propTypes = {
  containerStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isFilled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  pressedBackgroundColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical:5,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#d6d6d6',
    fontWeight:'bold'
  },
});

export default TextButton;
