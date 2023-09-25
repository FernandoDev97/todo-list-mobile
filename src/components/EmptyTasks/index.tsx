import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Image source={require("../../../assets/Clipboard.png")} />
      <View style={styles.boxTexts}>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textNormal}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
