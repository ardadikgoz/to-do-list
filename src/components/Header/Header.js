import React from 'react';
import {Text, View} from 'react-native';
import styles from './Header.styles';

const Header = ({list}) => {
  const listCount = list.filter(item => !item.isDone);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.counter}>{listCount.length}</Text>
    </View>
  );
};

export default Header;
