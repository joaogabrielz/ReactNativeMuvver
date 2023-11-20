import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button } from "react-native-paper";

export default function Weight() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate('Price');
  };

  const [value, setValue] = React.useState("");

  const items = [
    {
      title: "Até 1 kg",
      value: "1",
    },
    {
      title: "Até 5 kg",
      value: "2",
    },
    {
      title: "Até 10 kg",
      value: "3",
    },
    {
      title: "Até 20 kg",
      value: "4",
    },
    {
      title: "Outro",
      value: "5",
    }
  ];

  const handleItemPress = (value) => {
    setValue(value);
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>
          Qual o peso do volume?
        </Text>
      </View>
      <ScrollView>
        <Text style={[styles.bold, styles.subtitle]}>Peso</Text>
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
                  source={require("../assets/balanca.png")}
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
          onPress={() => navigateTo()}
        >
          Pular etapa
        </Button>
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
    paddingTop: 20
  },
  subtitle: {
    padding: 22
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
    paddingTop: 5,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  cta: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10
  }
});
