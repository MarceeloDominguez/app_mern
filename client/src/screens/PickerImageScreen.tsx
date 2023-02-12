import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { usePostContext } from "../context/PostsContext";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default function PickerImageScreen() {
  const { uploadImage } = usePostContext();
  const [imageSelected, setImageSelected] = useState(false);
  const navigation = useNavigation();

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (result.canceled) return;
    if (!result.assets[0].uri) return;

    if (result.assets) {
      setImageSelected(true);
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
      setImageSelected(true);
      const fileName = result.assets[0].uri.split("/").pop();
      const fileType = fileName!.split(".").pop();
      uploadImage(result.assets[0].uri, fileName!, fileType!);
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-back-outline"
        size={25}
        color="#202020"
        style={styles.iconArrowBack}
        onPress={() => navigation.goBack()}
      />
      <Image
        source={require("../../assets/photo_2.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>
          {imageSelected ? "Imagen en el feed" : "Toma o selecciona una foto"}
        </Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={takePhoto}
          >
            <Text style={styles.titleButton}>Camara</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={takePhotoFromGallery}
          >
            <Text style={styles.titleButton}>Galería</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconArrowBack: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  image: {
    width: "80%",
    height: height * 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#202020",
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FD841F",
    width: 100,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
  },
  titleButton: {
    color: "#202020",
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});
