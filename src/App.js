import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import Task from './components/Task/Task';

const App = () => {
  const [todo, setToDo] = useState('');
  const [list, setList] = useState([]);

  const handleSaveToDo = () => {
    if (todo.length > 0) {
      const newToDo = {
        id: Math.random().toFixed(4),
        text: todo,
        isDone: false,
      };
      setList([newToDo, ...list]);
      setToDo('');
    } else {
      Alert.alert('Boş bir ekleme yapamazsınız...');
    }
  };
  //toast kullan
  return (
    <SafeAreaView style={styles.container}>
      <Header list={list} />
      <Task todoList={list} setList={setList} />
      <ToDo setToDo={setToDo} handleSaveToDo={handleSaveToDo} text={todo} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#052d25',
    justifyContent: 'space-between',
  },
});
