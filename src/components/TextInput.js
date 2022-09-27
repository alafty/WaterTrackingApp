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
          style={props.isFilled ? [styles.input, {backgroundColor: colors.blue, borderColor: colors.blueShade}] : styles.input}
          inputStyle={props.isFilled ? [styles.inputStyle, {color: colors.white, fontWeight: '600'}] : styles.inputStyle}
          labelStyle={props.isFilled ? styles.labelStyleFilled : styles.labelStyle}
          placeholderStyle={styles.placeholderStyle}
          textErrorStyle={styles.textErrorStyle}
          label= {props.label}
          placeholder= {props.placeholder}
          placeholderTextColor={ props.isFilled ? colors.white : colors.gray}
          focusColor= {props.isFilled ? colors.white : colors.blue}
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
      borderRadius: 30,
      borderWidth: 1.5,
      borderColor: colors.blueShade
    },
    inputStyle: { 
        fontSize: 16,
        paddingLeft: 15,
        color: colors.blueShade
     },
    labelStyle: {
      fontSize: 14,
      position: 'absolute',
      top: -10,
      paddingHorizontal: 4,
      marginStart: 15,
      marginLeft: -4,
      backgroundColor: colors.white
    },
    labelStyleFilled:{
        fontSize: 14,
        position: 'absolute',
        top: -10,
        paddingHorizontal: 4,
        marginStart: 15,
        marginLeft: -4,
        backgroundColor: colors.blue,
        color: colors.blue
    },
    placeholderStyle: { 
        fontSize: 16,
        paddingLeft: 15
    },
    textErrorStyle: { fontSize: 16 },
  });