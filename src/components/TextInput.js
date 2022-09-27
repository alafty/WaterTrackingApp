import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { TextInput } from 'react-native-element-textinput';
import { colors } from '../colors';

  const TextInputComponent = (props) => {
    const [value, setValue] = useState('');

    return (
      <View style={styles.container}>
        <TextInput
          value={value}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {props.label}
          placeholder= {props.placeholder}
          placeholderTextColor={colors.gray}
          focusColor= {colors.blue}
          onChangeText={text => {
            setValue(text);
          }}
        />
      </View>
    );
  };

  export default TextInputComponent;

  const styles = StyleSheet.create({
    container: {
      padding: 16,
      paddingVertical: 5
    },
    input: {
      height: 55,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: colors.blueShade,
    },
    inputStyle: { fontSize: 16 },
    labelStyle: {
      fontSize: 14,
      position: 'absolute',
      top: -10,
      backgroundColor: colors.white,
      paddingHorizontal: 4,
      marginLeft: -4,
    },
    placeholderStyle: { fontSize: 16 },
    textErrorStyle: { fontSize: 16 },
  });