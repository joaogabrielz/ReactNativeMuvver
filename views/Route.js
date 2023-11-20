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

import { RadioButton, Text, Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Route() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("Volume");
  };

  const [isRoute, setIsRoute] = useState(true);

  const swapTo = (option) => {
    if (option != "map") {
      setIsRoute(false);
      return;
    }
    setIsRoute(true);
  };

  const [collectDate, setCollectDate] = useState("");

  const handleCollectDate = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (cleanedText.length <= 2) {
      setCollectDate(cleanedText);
    } else if (cleanedText.length <= 4) {
      setCollectDate(cleanedText.slice(0, 2) + "/" + cleanedText.slice(2));
    } else {
      setCollectDate(
        cleanedText.slice(0, 2) +
          "/" +
          cleanedText.slice(2, 4) +
          "/" +
          cleanedText.slice(4, 8)
      );
    }
  };

  const [deliverDate, setDeliverDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleDeliverDate = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, "");

    if (cleanedText.length <= 2) {
      setDeliverDate(cleanedText);
    } else if (cleanedText.length <= 4) {
      setDeliverDate(cleanedText.slice(0, 2) + "/" + cleanedText.slice(2));
    } else {
      setDeliverDate(
        cleanedText.slice(0, 2) +
          "/" +
          cleanedText.slice(2, 4) +
          "/" +
          cleanedText.slice(4, 8)
      );
    }
  };

  return (
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.text}>Qual trajeto da sua viagem?</Text>
      </View>
      <View style={styles.menu}>
        <View style={[styles.action, isRoute ? styles.active : ""]}>
          <ButtonNative
            title="Rotas"
            color={"black"}
            accessibilityLabel="Botao Rotas"
            onPress={() => swapTo("map")}
          />
        </View>
        <View style={[styles.action, !isRoute ? styles.active : ""]}>
          <ButtonNative
            title="Mapa"
            color={"black"}
            accessibilityLabel="Botao Mapa"
            onPress={() => swapTo("route")}
          />
        </View>
      </View>
      {isRoute && (
        <View>
          <View>
            <Text style={[styles.subtitle, styles.bold]}>
              Selecione a data e rota da sua viagem
            </Text>
          </View>
          <View style={styles.deliverDate}>
            <TextInput
              style={styles.inputDate}
              mode="outlined"
              label="Data de coleta"
              placeholder="MM/DD/YYYY"
              keyboardType="numeric"
              onChangeText={handleCollectDate}
              value={collectDate}
              maxLength={10}
            />
            <TextInput
              style={styles.inputDate}
              mode="outlined"
              label="Data de entrega"
              placeholder="MM/DD/YYYY"
              keyboardType="numeric"
              onChangeText={handleDeliverDate}
              value={deliverDate}
              maxLength={10}
            />
          </View>
          <View style={styles.inputText}>
            <TextInput
              mode="outlined"
              label="Cidade de origem"
              placeholder="Cidade de origem"
              right={<TextInput.Affix text="" />}
              onChangeText={(text) => setOrigin(text)}
              value={origin}
            />
          </View>
          <View style={styles.textAddMore}>
            <Button
              icon={({ size, color }) => (
                <Icon name="add-circle-outline" size={30} color={"black"} />
              )}
            ></Button>
            <View>
              <Text style={styles.bold}>Adicione ponto intermediário</Text>
              <Text style={styles.lightgrey}>
                E aumente sua chance de match
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.inputText}>
              <TextInput
                mode="outlined"
                label="Cidade de destino"
                placeholder="Cidade de destino"
                right={<TextInput.Affix text="" />}
                onChangeText={(text) => setDestination(text)}
                value={destination}
              />
            </View>
          </View>
          <Button
            style={[styles.cta, styles.bold]}
            mode="contained"
            onPress={() => navigateTo()}
          >
            Avançar
          </Button>
        </View>
      )}
      {!isRoute && (
        <View>
          <View>
            <Image
              source={require("../assets/mapaMuver.png")}
              style={styles.image}
            />
          </View>
          <Button
            style={[styles.cta, styles.bold]}
            mode="contained"
            onPress={() =>  swapTo("map")}
          >
            Avançar
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
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
    padding: 20,
    color: "black",
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  lightgrey: {
    color: "lightgrey",
  },
  textAddMore: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputDate: {
    width: "44%",
  },
  inputText: {
    marginHorizontal: 20,
  },
  deliverDate: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  cta: {
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  action: {
    flex: 1,
    paddingBottom: 5,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  image: {
    minHeight: 500,
    width: "100%",
    resizeMode: "contain",
  },
  title: { color: "white", padding: 5, fontSize: 22 },
  scrollable: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 10,
    position: "relative",
  },
  textFlexBetween: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  textTravel: {},
  boxDriver: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    gap: 10,
  },
  infoTravel: {
    display: "flex",
    gap: 10,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "black",
    gap: 0,
  },
});
