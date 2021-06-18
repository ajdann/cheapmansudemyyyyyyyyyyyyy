import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/userSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      console.log("xddd");
      setLoading(true);
      setTimeout(() => {
        dispatch(setToken("xdd"));
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image
        src={{
          uri: "https://www.gssst.edu.ba/storage/news-image/1613382878.jpg",
        }}
        style={{ width: 100, height: 100 }}
      /> */}
      <img
        src="https://upload.wikimedia.org/wikipedia/en/7/73/IUS_Official_Logo.png"
        alt="Girl in a jacket"
        width="200"
        height="200"
      />
      <Button
        title={"Sign in with Office 365"}
        icon={
          <Image
            style={{ width: 25, height: 25, marginRight: 20 }}
            source={require("../../assets/office-365.svg")}
          />
        }
        containerStyle={[
          {
            borderRadius: 5,
            borderColor: "#FF0101",
            borderWidth: 1,
            width: "70%",
            marginTop: 20,
          },

          // containerStyle,
        ]}
        buttonStyle={{
          backgroundColor: "white",
        }}
        titleStyle={{
          color: "#FF0101",
          fontSize: 15,
        }}
        onPress={handleLogin}
        loadingProps={{
          color: "red",
        }}
        loading={loading}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
