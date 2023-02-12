import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

interface Post {
  _id: string;
  image: { public_id: string; url: string };
}

type Props = {
  post: Post;
};

const { height } = Dimensions.get("window");

export default function CardPost({ post }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.wrapInfoUser}>
          <View style={styles.containerAvatar}>
            <Image
              source={{
                uri: "https://cdn.lorem.space/images/face/.cache/450x660/pexels-creation-hill-1681010.jpg",
              }}
              style={styles.avatar}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>Richard Meyer</Text>
            <Text style={styles.subName}>@richard_mayer</Text>
          </View>
        </View>
        <Icon
          name="ellipsis-horizontal"
          size={22}
          style={{ textAlignVertical: "center" }}
          color="#202020"
        />
      </View>
      <Image source={{ uri: post?.image.url }} style={styles.image} />
      <View style={styles.containerIcons}>
        <Icon name="heart-outline" size={22} color="#202020" />
        <Text style={styles.icon}>0</Text>
        <Icon name="chatbubble-ellipses-outline" size={19} color="#202020" />
        <Text style={styles.icon}>0</Text>
        <Icon name="paper-plane-outline" size={19} color="#202020" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 16,
    padding: 20,
    elevation: 2,
  },
  containerHeader: {
    flexDirection: "row",
    marginBottom: 12,
    justifyContent: "space-between",
  },
  wrapInfoUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height * 0.5,
    borderRadius: 16,
  },
  containerAvatar: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "#C58940",
    flexDirection: "row",
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  name: {
    fontWeight: "700",
    letterSpacing: 0.3,
    color: "#202020",
  },
  subName: {
    fontSize: 12,
    opacity: 0.7,
  },
  containerIcons: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 15,
    marginHorizontal: 5,
  },
});
