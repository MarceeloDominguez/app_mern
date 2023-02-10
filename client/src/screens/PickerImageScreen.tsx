import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { usePostContext } from "../context/PostsContext";

export default function PickerImageScreen() {
  const { uploadImage } = usePostContext();

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (result.canceled) return;
    if (!result.assets[0].uri) return;

    if (result.assets) {
      const fileName = result.assets[0].uri.split("/").pop();
      const fileType = fileName!.split(".").pop();
      uploadImage(result.assets[0].uri, fileName!, fileType!);
    }
  };

  const takePhotoFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (result.canceled) return;
    if (!result.assets[0].uri) return;

    if (result.assets) {
      const fileName = result.assets[0].uri.split("/").pop();
      const fileType = fileName!.split(".").pop();
      uploadImage(result.assets[0].uri, fileName!, fileType!);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Pantalla de los botones</Text>
      <Button title="camara" onPress={takePhoto} />
      <Button title="galeria" onPress={takePhotoFromGallery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
  },
});
