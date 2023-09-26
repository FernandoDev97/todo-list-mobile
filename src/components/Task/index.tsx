import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { ITask } from "../../screens/Home";
import { FontAwesome } from "@expo/vector-icons";

interface TaskProps {
  task: ITask;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export function Task({ task, deleteTask, completeTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => completeTask(task.id)}>
        <MaterialCommunityIcons
          name={
            task.isCompleted
              ? "checkbox-marked-circle"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={task.isCompleted ? "#5e60ce" : "#4EA8DE"}
        />
      </TouchableOpacity>
      <Text style={task.isCompleted ? styles.textDone : styles.textCreate}>
        {task.title}
      </Text>
      <TouchableOpacity
        onPress={() => deleteTask(task.id)}
        style={styles.trashIcon}
      >
        <FontAwesome name="trash-o" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
