import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/styles";
import { Button, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
const Lecture = () => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <WebView
        originWhitelist={["*"]}
        style={{ height: 1000, width: 500 }}
        source={{ html: "<h1>Hello world</h1>" }}
      />
      <div>
        <iframe
          height="200"
          width="100%"
          src={`https://www.youtube.com/watch?v=fKKNPLowteY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <View>
        <Text
          style={{
            color: GlobalStyles.purple,
            fontSize: 30,
          }}
        >
          Notes
        </Text>
        <Text>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"{" "}
        </Text>
      </View>
    </View>
  );
};

export default Lecture;

const styles = StyleSheet.create({
  xd: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0,
  },

  xdd: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
