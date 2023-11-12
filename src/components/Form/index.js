import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura... ");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imclist, setImclist] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImclist((arraydosImcs) => [
      ...arraydosImcs,
      { id: new Date().getTime(), imc: totalImc },
    ]);
    setImc(totalImc);
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório *");
      return;
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu Imc é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.487"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.buttonCalculator}>
            <Text style={styles.textButtonCalculator} onPress={validationImc}>
              {textButton}
            </Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exibitionResultImc}>
          <ResultImc messageResultImc={messageImc} ResultImc={imc} />
          <TouchableOpacity style={styles.buttonCalculator}>
            <Text style={styles.textButtonCalculator} onPress={validationImc}>
              {textButton}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imclist.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC: </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
    </View>
  );
}
