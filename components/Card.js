import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button as ButtonNative,
} from "react-native";
import React, { useState } from "react";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Card({ infos, goTo }) {
  const { title, desc, image } = infos;

  const navigation = useNavigation();

  const navigateTo = () => {
    if (goTo) {
      navigation.navigate(goTo);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigateTo()}>
      <View style={styles.card}>
        <View>
          <Text style={[styles.textCard, styles.textTitle]}>{title}</Text>
          <Text style={styles.textCard}>{desc}</Text>
        </View>
        <View>
          <Image
            source={image || require("../assets/favicon.png")}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 30,
    paddingHorizontal: 25,
    color: "white",
    marginVertical: 12,
    borderRadius: 5,
    height: 140,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textCard: {
    color: "white",
    maxWidth: 190,
    flexWrap: "wrap",
  },
});
