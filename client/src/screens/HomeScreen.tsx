import { useEffect, useState } from "react";
import { StyleSheet, StatusBar, ScrollView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { usePostContext } from "../context/PostsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/Navigation";
import MyContacts from "../components/MyContacts";
import CardPost from "../components/CardPost";
import Icon from "@expo/vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

interface IconInterface {
  name: keyof typeof Ionicons.glyphMap;
}

const iconsTab: IconInterface[] = [
  { name: "home" },
  { name: "search" },
  { name: "add-circle" },
  { name: "notifications" },
  { name: "person" },
];

interface Props extends NativeStackScreenProps<RootStackParams> {}

export default function HomeScreen({ navigation }: Props) {
  const { images, getPosts, setImages } = usePostContext();
  const [index, setIndex] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    loadPosts();
  }, [isFocused]);

  const loadPosts = async () => {
    const posts = await getPosts();

    setImages(posts.reverse());
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#FAF8F1" barStyle="dark-content" />
        <View style={styles.wrapIconsHeader}>
          <Icon
            name="camera"
            size={28}
            color="#FD841F"
            onPress={() => navigation.navigate("PickerImageScreen")}
          />
          <Icon name="chatbubble-ellipses" size={28} color="#FD841F" />
        </View>
        <MyContacts />
        <View style={{ paddingBottom: 90 }}>
          {images.length > 0 &&
            images.map((item, index) => <CardPost key={index} post={item} />)}
        </View>
      </ScrollView>
      <View style={styles.containerTabs}>
        {iconsTab.map((item, i) => (
          <Icon
            key={i}
            onPress={() => setIndex(i)}
            name={item.name}
            size={25}
            color={index === i ? "#FD841F" : "rgba(255,255,255,0.4)"}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
  },
  wrapIconsHeader: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  containerTabs: {
    backgroundColor: "#202020",
    height: 60,
    marginHorizontal: 25,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
});
