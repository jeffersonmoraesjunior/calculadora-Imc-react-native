import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./styles";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.ResultImc,
    });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharebutton}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.ResultImc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
