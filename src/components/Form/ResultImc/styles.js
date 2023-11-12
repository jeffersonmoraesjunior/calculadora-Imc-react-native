import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 15,
    paddingTop: 30,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 48,
    color: "#6454F0",
    fontWeight: "bold",
  },
  information: {
    fontSize: 24,
    color: "#6454F0",
    fontWeight: "bold",
  },
  boxSharebutton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  shared: {
    backgroundColor: "green",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
    fontSize: 20,
  },
});

export default styles;
