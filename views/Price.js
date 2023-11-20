import {
  View,
  StyleSheet,
  ScrollView,
  Button as ButtonNative,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { RadioButton, Text, Button, TextInput } from "react-native-paper";

import Slider from "@react-native-community/slider";

export default function Price() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("CreatedTravel");
  };

  const [sliderValue, setSliderValue] = useState(100);

  const onChangeSlider = (value) => {
    if (!value) {
      setValue(0);
    } else {
      setSliderValue(value);
    }
  };

  const [isSlider, setIsSlider] = useState(true);

  const [value, setValue] = React.useState("100");

  const handleValue = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (!cleanedText) {
      setValue("0");
    } else {
      setValue(cleanedText);
    }
  };

  const changeSlider = () => {
    setIsSlider(!isSlider);
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

        <Text
          style={[
            styles.textCenter,
            styles.bold,
            styles.lightGrey,
            styles.sugest,
          ]}
        >
          Valor sugerido
        </Text>
        <View style={styles.inputText}>
          {!isSlider && <Text>R$ </Text>}
          {!isSlider && (
            <TextInput
              style={styles.input}
              mode="outlined"
              label="Preço"
              placeholder="100"
              keyboardType="numeric"
              right={<TextInput.Affix text="" />}
              onChangeText={(text) => handleValue(text)}
              value={value}
            />
          )}

          {isSlider && (
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={250}
              step={1}
              value={sliderValue}
              thumbTintColor="#543d93"
              minimumTrackTintColor="#6750a4"
              maximumTrackTintColor="#6750a4"
              onValueChange={onChangeSlider}
            />
          )}
        </View>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => changeSlider()}
        >
          <Text style={styles.textPrice}>
            R$ {isSlider ? sliderValue || "00.00" : value || "00.00"}
          </Text>
        </TouchableOpacity>

        <View>
          <Text
            style={[styles.paddingText, styles.textCenter, styles.lightGrey]}
          >
            Troque o valor acima, para um preço mais específico
          </Text>
        </View>
        <Button
          style={styles.cta}
          mode="contained"
          disabled={!sliderValue || !value || sliderValue <= 0 || value <= 0}
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
    paddingTop: 20,
  },
  subtitle: {
    padding: 22,
  },
  bold: {
    fontWeight: "bold",
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
  input: {
    width: "90%",
  },
  slider: {
    width: "100%",
  },
  sugest: {
    marginBottom: 30,
  },
  textPrice: {
    textAlign: "center",
  },
  touchable: {
    marginTop: 20,
    height: 30,
  },
  cta: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});
