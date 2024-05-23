import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = () => {
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Atualizar Tarefa"
        onChangeText={setValue}
      />
      <Button title="Atualizar Tarefa" onPress={handleSubmit} />
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