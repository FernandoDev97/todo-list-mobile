import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export function Header() {
  const [focus, setFocus] = useState(false)
  const customInputFocusStyle = focus ? styles.inputFocus : styles.inputNotFocus

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
        />
        <TouchableOpacity style={styles.buttonAdd}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}
