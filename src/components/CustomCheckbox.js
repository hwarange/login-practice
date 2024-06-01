import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const CustomCheckbox = ({
  label,
  isChecked = false,
  onPress,
  fillColor = 'white', // 기본 배경색을 하얀색으로 변경
  borderColor = 'gray', // 기본 테두리 색상을 회색으로 변경
  checkColor = 'black', // 체크 표시 색상을 검정색으로 변경
  textColor = 'black',
}) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleCheckbox = () => {
    const newValue = !checked;
    setChecked(newValue);
    onPress(newValue);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.container}>
      <View style={[styles.checkbox, checked ? styles.checked : null, { backgroundColor: checked ? fillColor : 'transparent', borderColor }]}>
        {checked && <AntDesign name="check" size={18} color={checkColor} />} 
      </View>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  fillColor: PropTypes.string,
  borderColor: PropTypes.string,
  checkColor: PropTypes.string,
  textColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 4, // 테두리를 둥글게 만듭니다.
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 50,
  },
  checked: {
    backgroundColor: 'white', // 체크된 상태의 배경색을 하얀색으로 변경
    borderColor: 'gray', // 체크된 상태의 테두리 색상을 회색으로 변경
  },
  label: {
    fontSize: 14,
    marginVertical: 50,
  },
});

export default CustomCheckbox;
