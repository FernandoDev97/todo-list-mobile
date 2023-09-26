import { Alert, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";
import * as Crypto from "expo-crypto";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskTitle: string) {
    setTasks(state => [
      ...state,
      {
        id: Crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    Alert.alert('Removendo tarefa', `Deseja mesmo remover esta tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks((state) => state.filter((task) => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
     ]) 
  }

  function completeTasksById(id: string) {
    const taskCompleted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(taskCompleted);
  }

  return (
    <View style={styles.container}>
      <Header tasks={tasks} addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} completeTask={completeTasksById}/>
    </View>
  );
}
