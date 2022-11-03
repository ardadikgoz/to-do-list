import React, {useState} from 'react';
import styles from './ToDo.styles';
import {Text, View, TextInput, Pressable} from 'react-native';

const ToDo = ({setToDo, handleSaveToDo, text}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputItem}
        placeholder="Yapılacak..."
        placeholderTextColor="#080808"
        value={text}
        onChangeText={text => setToDo(text)}
      />
      <Pressable
        style={toString(text).length > 0 ? styles.button_hover : styles.button}
        onPress={handleSaveToDo}>
        <Text style={styles.text}>Kaydet</Text>
      </Pressable>
    </View>
  );
};

export default ToDo;
