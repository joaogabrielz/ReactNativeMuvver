import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  Image,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button, TextInput } from "react-native-paper";

export default function CreatedTravel() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("Feed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/planepapper.png")}
          style={styles.image}
        />
      </View>
      <Text style={[styles.textCenter, styles.title]}>Viagem Criada</Text>
      <View>
        <Text style={[styles.paddingText, styles.textCenter]}>
          Vamos ver os volumes já disponiveis para sua viagem
        </Text>
      </View>
      <View>
        <Text style={[styles.paddingText, styles.textCenter, styles.lightGrey]}>
          Ao prosseguir, você declara para efeitos legais, administrativos,
          judiciais e demais aplicaveis, a veracidade de todas as informações
          prestadas antes, durante e após qualquer uma das etapas do app
        </Text>
      </View>
      <Button style={styles.cta} mode="contained" onPress={() => navigateTo()}>
        Vizualizar volumes
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 100
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
  },
  lightGrey: {
    color: "lightgrey",
  },
  paddingText: {
    padding: 20,
  },
  textCenter: {
    textAlign: "center",
  },
  inputText: {
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cta: {
    position: "absolute",
    left: 0,
    right: 0,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    bottom: 10,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
});
