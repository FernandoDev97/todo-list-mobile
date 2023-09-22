import { StatusBar, StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0d0d0d"
        translucent
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d'
  }
})