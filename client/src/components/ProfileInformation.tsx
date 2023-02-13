import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { usePostContext } from "../context/PostsContext";

export default function ProfileInformation() {
  const { images } = usePostContext();

  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Text style={styles.title}>Photos</Text>
        <Text style={styles.number}>{images.length}</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.title}>Followers</Text>
        <Text style={styles.number}>100</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.title}>Follows</Text>
        <Text style={styles.number}>100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  tab: {
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: "#202020",
    fontWeight: "500",
    letterSpacing: 0.4,
    opacity: 0.5,
  },
  number: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#202020",
  },
});
