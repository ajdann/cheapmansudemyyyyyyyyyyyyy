import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#6377C0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View styles={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>C H E A P</Text>
          <Text style={styles.title}>M A N' S</Text>
          <Text style={styles.title}>U D E M Y</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6377C0",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#6377C0",
    height: "100%",
    alignItems: "center",
  },
});
