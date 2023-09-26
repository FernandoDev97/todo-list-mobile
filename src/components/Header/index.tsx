import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { ITask } from "../../screens/Home";

interface HeaderProps {
  addTask: (nameTask: string) => void;
  tasks: ITask[];
}

export function Header({ addTask, tasks }: HeaderProps) {
  const [focus, setFocus] = useState(false);
  const [titleTask, setTitleTask] = useState("");
  const customInputFocusStyle = focus
    ? styles.inputFocus
    : styles.inputNotFocus;

  const handleNewTask = () => {
    if (!titleTask) {
      return Alert.alert(
        "Nome da tarefa",
        "Escreva o nome da tarefa para prosseguir"
      );
    }
    if (tasks.some((task) => task.title === titleTask)) {
      return Alert.alert(
        "Nova tarefa",
        "Ja existe uma tarefa com esse nome na lista"
      );
    }
    addTask(titleTask);
    setTitleTask("");
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={customInputFocusStyle}
          placeholder="Nome do participante"
          placeholderTextColor="#808080"
          keyboardType="default"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(e) => setTitleTask(e)}
          value={titleTask}
        />
        <TouchableOpacity onPress={handleNewTask} style={styles.buttonAdd}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}
