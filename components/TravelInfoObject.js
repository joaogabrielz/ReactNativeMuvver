import { View, StyleSheet, Image, Button as ButtonNative } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, TextInput, Text, Avatar } from "react-native-paper";

export default function travelInfoObject({ travelInfo }) {
  const {
    dateDelivery,
    route,
    routeTo,
    driverImage,
    driverName,
    rating,
    objectImage,
    objectName,
    verified = false,
  } = travelInfo;

  return (
    <View style={styles.container}>
      <View style={styles.boxObject}>
        <View>
          <Image
            source={objectImage || require("../assets/icon.png")}
            style={styles.imageObj}
          />
        </View>
        <View>
        <Text style={styles.flex}>
          <Text style={styles.bold}>{objectName}</Text>
          <Text style={styles.lightgray}>Entrega para</Text>
        </Text>
        <Text style={styles.flex}>
          <Text style={styles.lightgray}>{route}</Text>
          <Text style={styles.bold}>{dateDelivery}</Text>
        </Text>
        <Text >
          <Text style={styles.lightgray}>{routeTo}</Text>
        </Text>
        </View>
      </View>

      <View style={styles.boxDriver}>
        <View>
          <Image
            source={driverImage || require("../assets/icon.png")}
            style={styles.image}
          />
        </View>
        <View>
          <Text>
            <Text style={styles.bold}>{driverName}</Text> *{" "}
            <Text style={styles.bold}>
              {rating} <Icon name="star"></Icon>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: "lightgray",
    width: "100%",
  },
  scrollable: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  lightgray: {
    color: "lightgray",
  },
  boxDriver: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    gap: 10,
    alignItems: "center",
  },
  boxObject: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: '100%',
    paddingVertical: 15,
    gap: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 30,
    height: 30,
  },
  imageObj: {
    width: 50,
    height: 50,
  },
});
