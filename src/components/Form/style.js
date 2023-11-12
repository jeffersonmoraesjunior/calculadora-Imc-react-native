import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    marginTop: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 10,
  },
  form: {
    width: "100%",
    paddingTop: 20,
    // alignItems: "center",
  },
  formLabel: {
    alignItems: "flex-start",
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20,    
  },
  input: {
    width: "90%",        
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#6454F0",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 20,
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exibitionResultImc: {
    width: "100%",
    height: "50%",
    alignItems: "center",    
  },
  listImcs:{
    marginTop: 20,
  },
  resultImcItem:{
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20,
  },
  textResultItemList:{
    fontSize: 16,    
  },
});

export default styles;
