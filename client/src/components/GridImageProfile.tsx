import React from "react";
import { View, Dimensions, Image, StyleSheet, Text } from "react-native";
import { usePostContext } from "../context/PostsContext";

const { width, height } = Dimensions.get("window");

export default function GridImageProfile() {
  const { images } = usePostContext();

  return (
    <>
      {images.length === 0 && (
        <View style={styles.containerNoPost}>
          <Text style={styles.title}>No hay imagenes</Text>
        </View>
      )}
      <View style={styles.container}>
        {images.map((item, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: item.image.url }}
                style={{
                  width: width / 2 - 20,
                  margin: 5,
                  position:
                    index === 2 || index === 5 || index === 8
                      ? "absolute"
                      : undefined,
                  right: 0,
                  bottom: 0,
                  height:
                    index === 1 ||
                    index === 2 ||
                    index === 4 ||
                    index === 5 ||
                    index === 7 ||
                    index === 8
                      ? height * 0.194
                      : height * 0.4,
                  borderRadius: 16,
                }}
              />
            </View>
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginBottom: 40,
  },
  containerNoPost: {
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
