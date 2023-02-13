import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileAvatar() {
  return (
    <View style={styles.containerProfile}>
      <Image
        source={{
          uri: "https://cdn.lorem.space/images/face/.cache/450x660/pexels-creation-hill-1681010.jpg",
        }}
        style={styles.imageProfile}
        resizeMode="contain"
      />
      <Text style={styles.name}>Richard Meyer</Text>
      <Text style={styles.subName}>@richard_mayer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 25,
  },
  containerProfile: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 0.4,
    marginTop: 10,
    color: "#202020",
  },
  subName: {
    fontSize: 14,
    opacity: 0.7,
  },
});
