import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button as ButtonNative,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, Text } from "react-native-paper";
import TravelInfo from "../components/TravelInfo";
import TravelInfoObject from "../components/TravelInfoObject";
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate("SendDeliver");
  };

  const [isTravel, setIsTravel] = useState(true);

  const swapTo = (option) => {
    if (option != "objects") {
      setIsTravel(false);
      return;
    }
    setIsTravel(true);
  };

  const tarvels = [
    {
      id: 1,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 150,00",
      description: "Passará por Nova Alvorada, Rio Brilhante e Parana",
      driverImage: require("../assets/muie.jpg"),
      driverName: "Amanda Lima",
      verified: true,
      rating: "4,97",
      deliveries: "575",
      vehicleType: "Carro",
    },
    {
      id: 2,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 80,00",
      driverName: "Pedro Arruda",
      verified: false,
      rating: "4,0",
      deliveries: "70",
      vehicleType: "Carro",
    },
    {
      id: 3,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 100,00",
      driverName: "Bruna silva",
      verified: false,
      rating: "4,99",
      deliveries: "349",
      vehicleType: "Avião",
    },
    {
      id: 4,
      dateBefore: "Hoje (12/01)",
      dateAfter: "Amanha(13/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 100,00",
      driverName: "Cintia Mourão",
      driverImage: require("../assets/muie.jpg"),
      verified: true,
      rating: "5,0",
      deliveries: "1030",
      vehicleType: "Moto",
    },
    {
      id: 5,
      dateBefore: "Hoje (13/06)",
      dateAfter: "Amanha(14/01)",
      route: "Rio Brilhante para Dourados - MS",
      price: "R$ 120,00",
      driverName: "Carlos Moura",
      verified: true,
      rating: "4,0",
      deliveries: "1030",
      vehicleType: "Moto",
    },
  ];

  const objects = [
    {
      id: 1,
      dateDelivery: "12/01/2019",
      route: "De: Rio Brilhante - MS",
      routeTo: "Para: Dourados - MS",
      driverImage: require("../assets/muie.jpg"),
      driverName: "Amanda Lima",
      rating: "4,97",
      objectImage: require("../assets/marcoaurelio.jpeg"),
      objectName: "Livro",
      verified: true,
    },
  ];

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxflex}>
          <Button
            icon={({ size, color }) => (
              <Image
                source={require("../assets/favicon.png")}
                style={styles.image}
              />
            )}
          ></Button>
          <Text style={styles.title}>Feed</Text>
        </View>
        <View style={styles.boxflex}>
          <Button
            icon={({ size, color }) => (
              <Icon name="info-outline" size={30} color={"#ffffffff"} />
            )}
          ></Button>
          <Button
            icon={({ size, color }) => (
              <Icon name="sort" size={30} color={"#ffffffff"} />
            )}
          ></Button>
        </View>
      </View>
      <View style={styles.menu}>
        <View style={[styles.action, isTravel ? styles.active : ""]}>
          <ButtonNative
            title="Viagens"
            color={"black"}
            accessibilityLabel="Botao Viagens"
            onPress={() => swapTo("objects")}
          />
        </View>
        <View style={[styles.action, !isTravel ? styles.active : ""]}>
          <ButtonNative
            title="Objetos"
            color={"black"}
            accessibilityLabel="Botao Objetos"
            onPress={() => swapTo("travels")}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollable}>
        {isTravel &&
          tarvels.map((travel, index) => (
            <TravelInfo key={travel.id} travelInfo={travel} />
          ))}
        {!isTravel &&
          objects.map((object, index) => (
            <TravelInfoObject key={object.id} travelInfo={object} />
          ))}
      </ScrollView>
      {isTravel && (
        <Button
          style={styles.cta}
          mode="contained"
          onPress={() => navigateTo()}
        >
          Vai viajar ou quer enviar
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "40",
    backgroundColor: "black",
    minHeight: 80,
    paddingVertical: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  boxflex: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  action: {
    flex: 1,
    padding: 0,
    paddingBottom: 5,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  image: {
    width: 30,
    height: 30,
  },
  title: { color: "white", padding: 5, fontSize: 22 },
  scrollable: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    position: "relative",
    marginBottom: 200
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
  image: {
    width: 30,
    height: 30,
  },
  cta: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    bottom: 145,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
});
