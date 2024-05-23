import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <View style={styles.todo}>
      <TouchableOpacity onPress={() => toggleComplete(task.id)}>
        <Text style={[styles.text, task.completed && styles.completed]}>{task.task}</Text>
      </TouchableOpacity>
      <View style={styles.icons}>
        <FontAwesomeIcon icon={faPenToSquare} onPress={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onPress={() => deleteTodo(task.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  icons: {
    flexDirection: 'row',
  },
});