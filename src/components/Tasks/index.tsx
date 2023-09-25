import { Text, View } from "react-native";
import { styles } from "./styles";
import { EmptyTasks } from "../EmptyTasks";

export function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.statusTasksSection}>
        <View style={styles.statusTasks}>
          <Text style={styles.textBlue}>Criadas</Text>
          <Text style={styles.statusTasksQuantity}>0</Text>
        </View>
        <View style={styles.statusTasks}>
          <Text style={styles.textPurple}>Concluídas</Text>
          <Text style={styles.statusTasksQuantity}>0</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <EmptyTasks />
    </View>
  );
}
