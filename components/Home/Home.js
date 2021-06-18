import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import GlobalStyles from "../../constants/styles";
import { useNavigation } from "@react-navigation/core";

const data = [
  {
    title: "Year 1",
    subjects: [
      { title: "Subject 1", subTitle: "Professor" },
      { title: "Subject 2", subTitle: "Professor" },
      { title: "Subject 3", subTitle: "Professor" },
      { title: "Subject 4", subTitle: "Professor" },
    ],
  },
  {
    title: "Year 2",
    subjects: [
      { title: "Subject 1", subTitle: "Professor" },
      { title: "Subject 2", subTitle: "Professor" },
      { title: "Subject 3", subTitle: "Professor" },
      { title: "Subject 4", subTitle: "Professor" },
    ],
  },
  {
    title: "Year 3",
    subjects: [
      { title: "Subject 1", subTitle: "Professor" },
      { title: "Subject 2", subTitle: "Professor" },
      { title: "Subject 3", subTitle: "Professor" },
      { title: "Subject 4", subTitle: "Professor" },
    ],
  },
];

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  const getSubjects = async () => {
    try {
      setIsLoaded(false);
      setError(null);
      setItems([]);

      setTimeout(() => {
        setItems(data);
      }, 1000);
    } catch (error) {
      setError("Internal server error");
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);
  return (
    <View style={styles.container}>
      {error ? (
        <Text>{error}err</Text>
      ) : !isLoaded ? (
        <ActivityIndicator />
      ) : items.length > 0 ? (
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          {items.map((e, i) => {
            return (
              <ListItem
                key={i}
                style={{
                  alignSelf: "center",
                  width: "90%",
                }}
              >
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      color: GlobalStyles.purple,
                      fontWeight: "700",
                      fontSize: 30,
                    }}
                  >
                    {e.title}
                  </ListItem.Title>
                  {e.subjects.map((e, i) => (
                    <View key={i} style={{ width: "100%" }}>
                      <ListItem.Subtitle
                        style={{
                          marginLeft: 30,
                          lineHeight: 30,
                          color: GlobalStyles.purple,
                          fontSize: 20,
                        }}
                        onPress={() =>
                          navigation.navigate("Subject", { id: i })
                        }
                      >
                        {e.title}
                      </ListItem.Subtitle>
                      <ListItem.Subtitle
                        style={{ marginLeft: 40, lineHeight: 30 }}
                      >
                        {e.subTitle}
                      </ListItem.Subtitle>
                    </View>
                  ))}
                </ListItem.Content>
              </ListItem>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
