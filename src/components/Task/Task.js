import React from 'react';
import {View, Text} from 'react-native';
import styles from './Task.styles';

const Task = ({todoList, setList}) => {
  const handleChangeIsDone = id => {
    const newList = todoList.map(todo =>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
    );
    setList(newList);
  };
  const handleDeleteToDo = id => {
    const newList = todoList.filter(todo => todo.id !== id);
    setList(newList);
  };
  return (
    <View style={styles.container}>
      {todoList.map(item => (
        <View key={item.id}>
          <Text
            onPress={() => handleChangeIsDone(item.id)}
            onLongPress={() => handleDeleteToDo(item.id)}>
            {item.text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Task;
