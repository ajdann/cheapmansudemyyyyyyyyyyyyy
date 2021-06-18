import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/Home";
import { Image } from "react-native-elements";
import Subject from "../components/Subject";
import Lecture from "../components/Lecture";
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Subject" component={Subject} />
      <Stack.Screen name="Lecture" component={Lecture} />
    </Stack.Navigator>
  );
};

export default HomeStack;
