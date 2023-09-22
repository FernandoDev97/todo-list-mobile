import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Tasks/>
    </View>
  );
}
