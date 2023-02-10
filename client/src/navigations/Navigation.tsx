import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PickerImageScreen from "../screens/PickerImageScreen";

export type RootStackParams = {
  HomeScreen: undefined;
  PickerImageScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PickerImageScreen" component={PickerImageScreen} />
    </Stack.Navigator>
  );
}
