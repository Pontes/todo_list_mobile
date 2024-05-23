import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <View style={styles.container}>
      <TodoWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
