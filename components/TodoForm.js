import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Qual é a tarefa?"
        onChangeText={setValue}
      />
      <Button title="Adicionar Tarefa" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});