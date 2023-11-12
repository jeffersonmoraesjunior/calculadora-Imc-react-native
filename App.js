import { View, StyleSheet } from "react-native";
import Title from "./src/components/Title/index";
import Main from "./src/components/Main/index";
import Form from "./src/components/Form/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6454F0",
    paddingTop: 80,
  },
});
