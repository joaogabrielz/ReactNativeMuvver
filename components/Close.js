import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function Close({goTo}) {
  const navigation = useNavigation();

  const navigateTo = () => {
    navigation.navigate(goTo);
  };

  return (
    <Button
      icon={({ size, color }) => (
        <Icon name="close" size={20} color={"#ffffffff"} />
      )}
      onPress={() => navigateTo()}
    ></Button>
  );
}

const styles = StyleSheet.create({});
