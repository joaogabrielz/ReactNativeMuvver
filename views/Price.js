import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button, TextInput } from "react-native-paper";

export default function Price() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("CreatedTravel");
  };

  const [value, setValue] = React.useState(100);

  const handleValue = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    setValue(cleanedText);
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>
          Definir um preço mínimo do deslocamento?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Preço de entrega</Text>

        <Text style={[styles.textCenter , styles.lightGrey]}>Valor sugerido</Text>
        <View style={styles.inputText}>
          <Text>R$ </Text>
          <TextInput
            mode="outlined"
            label="Preço"
            placeholder="100"
            keyboardType="numeric"
            right={<TextInput.Affix text="" />}
            onChangeText={(text) => handleValue(text)}
            value={value}
          />
        </View>
        <View>
          <Text style={[styles.paddingText, styles.textCenter, styles.lightGrey]}>Troque o valor acima, para um preço mais específico</Text>
        </View>
        <Button
          style={styles.cta}
          mode="contained"
          disabled={!value}
          onPress={() => navigateTo()}
        >
          Avançar
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  subtitle: {
    padding: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  lightGrey: {
    color: 'lightgrey'
  },
  paddingText: {
    padding: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  inputText: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cta: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
