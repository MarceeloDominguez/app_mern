import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tagged() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No hay Tagged</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.4,
    color: "#202020",
  },
});
