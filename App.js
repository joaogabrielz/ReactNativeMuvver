import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import Feed from "./views/Feed";
import Transports from "./views/Transports";
import Volume from "./views/Volume";
import Weight from "./views/Weight";
import Price from "./views/Price";
import Route from "./views/Route";
import SendOrDeliver from "./views/SendOrDeliver";
import Close from "./components/Close";
import CreatedTravel from "./views/CreatedTravel";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatedTravel"
          component={CreatedTravel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transports"
          component={Transports}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerLeft: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Volume"
          component={Volume}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Price"
          component={Price}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="SendDeliver" />,
          }}
        />
        <Stack.Screen
          name="Route"
          component={Route}
          options={{
            title: "Ser um Muvver",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "black",
              borderBottomWidth: 0,
            },
            headerTintColor: "lightgrey",
            headerRight: () => <Close goTo="Feed" />,
          }}
        />
        <Stack.Screen
          name="SendDeliver"
          component={SendOrDeliver}
          options={{ title: "muvver" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
