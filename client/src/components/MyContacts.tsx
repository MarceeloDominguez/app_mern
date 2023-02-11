import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { avatars } from "../data/avatars";
import { CommonActions, useNavigation } from "@react-navigation/native";

export default function MyContacts() {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.containerAvatarProfile}
        onPress={() =>
          navigation.dispatch(CommonActions.navigate("ProfileScreen"))
        }
      >
        <Image
          source={{
            uri: "https://cdn.lorem.space/images/face/.cache/450x660/pexels-creation-hill-1681010.jpg",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Icon name="add-circle" size={24} style={styles.iconAvatarProfile} />
      </TouchableOpacity>
      {avatars.map((item, index) => (
        <View key={index} style={styles.containerImage}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  containerAvatarProfile: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 8,
  },
  iconAvatarProfile: {
    position: "absolute",
    color: "#C58940",
    bottom: 6,
    right: 0,
  },
  containerImage: {
    backgroundColor: "#fff",
    marginHorizontal: 8,
    marginVertical: 5,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#C58940",
    borderRadius: 35,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
