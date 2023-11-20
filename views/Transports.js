import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button } from "react-native-paper";

export default function Transports() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("Route");
  };

  const [value, setValue] = React.useState("1");

  const items = [
    {
      title: "Carro",
      value: "1",
      icon: require("../assets/carbeter.png"),
    },
    {
      title: "Avião",
      value: "2",
      icon: require("../assets/planebeter.png"),
    },
    {
      title: "Caminhão",
      value: "3",
      icon: require("../assets/caminhao.jpeg"),
    },
    {
      title: "Van",
      value: "4",
      icon: require("../assets/van.png"),
    },
    {
      title: "Moto",
      value: "5",
      icon: require("../assets/moto.jpeg"),
    },
    {
      title: "Bicicleta",
      value: "6",
      icon: require("../assets/bicicl.png"),
    },
    {
      title: "Trem",
      value: "7",
      icon: require("../assets/trem.png"),
    },
  ];

  const handleItemPress = (value) => {
    setValue(value);
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>
          Qual será o meio de transporte da sua viagem?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Transporte</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.value}
              style={styles.selectRadio}
              onPress={() => handleItemPress(item.value)}
            >
              <View style={styles.flex}>
                <Image
                  source={item.icon || require("../assets/favicon.png")}
                  style={styles.image}
                />
                <Text style={styles.bold}>{item.title}</Text>
              </View>
              <RadioButton value={item.value} />
            </TouchableOpacity>
          ))}
        </RadioButton.Group>
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
    paddingTop: 10
  },
  subtitle: {
    padding: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectRadio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  cta: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
