import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import GlobalStyles from "../../constants/styles";
import { useNavigation } from "@react-navigation/core";

const data = [
  {
    title: "Week 1",
    subjects: [
      { title: "Lecture 1", subTitle: "short desc" },
      { title: "Lecture 2", subTitle: "short desc" },
      { title: "Lecture 3", subTitle: "short desc" },
      { title: "Lecture 4", subTitle: "short desc" },
    ],
  },
  {
    title: "Week 2",
    subjects: [
      { title: "Lecture 1", subTitle: "short desc" },
      { title: "Lecture 2", subTitle: "short desc" },
      { title: "Lecture 3", subTitle: "short desc" },
      { title: "Lecture 4", subTitle: "short desc" },
    ],
  },
  {
    title: "Week 3",
    subjects: [
      { title: "Lecture 1", subTitle: "short desc" },
      { title: "Lecture 2", subTitle: "short desc" },
      { title: "Lecture 3", subTitle: "short desc" },
      { title: "Lecture 4", subTitle: "short desc" },
    ],
  },
];

const Subject = () => {
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
                          navigation.navigate("Lecture", { id: i })
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

export default Subject;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
