import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import * as Keychain from "react-native-keychain";

import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { restoreToken, setToken } from "../redux/userSlice";

import Splash from "../components/common/Splash";
import Login from "../components/Login";
import Register from "../components/Register";

import HomeStack from "./Homestack";

const Stack = createStackNavigator();

const MainStack = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.user.isLoading);
  const userToken = useSelector((state) => state.user.userToken);

  const [preLogTest, setPreLogTest] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };
  const checkUserStatus = async () => {
    setTimeout(() => {
      dispatch(restoreToken());
    }, 1000);
  };

  useEffect(() => {
    console.log("checking user status");
    checkUserStatus();
  }, []);

  useEffect(() => {
    const setToken = async () => {
      try {
        if (preLogTest) {
          // await Keychain.setGenericPassword("xd", "sdsd");
          // dispatch(setToken("tokeeeeeeeeN"));
        }
      } catch (error) {
        console.error(error);
      }
    };
    setToken();
  }, [password]);
  return isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {userToken == null ? (
          <>
            <Stack.Screen name="HomeStack" component={HomeStack} />
            {/* <Stack.Screen name="Login" component={Login} /> */}
          </>
        ) : (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
