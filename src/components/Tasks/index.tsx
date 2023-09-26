import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { EmptyTasks } from "../EmptyTasks";
import { Task } from "../Task";
import { ITask } from "../../screens/Home";

interface TasksProps {
  tasks: ITask[];
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function Tasks({ tasks, deleteTask, completeTask }: TasksProps) {
  const quantityTasksCreated = tasks.length;
  const quantityTasksCompleted = tasks.filter(
    (task) => task.isCompleted === true
  );

  return (
    <View style={styles.container}>
      <View style={styles.statusTasksSection}>
        <View style={styles.statusTasks}>
          <Text style={styles.textBlue}>Criadas</Text>
          <Text style={styles.statusTasksQuantity}>{quantityTasksCreated}</Text>
        </View>
        <View style={styles.statusTasks}>
          <Text style={styles.textPurple}>Concluídas</Text>
          <Text style={styles.statusTasksQuantity}>
            {quantityTasksCompleted.length}
          </Text>
        </View>
      </View>
      <FlatList
        ListEmptyComponent={() => <EmptyTasks />}
        data={tasks}
        keyExtractor={(task) => task.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      />
    </View>
  );
}
