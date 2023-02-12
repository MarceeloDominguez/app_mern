import { useEffect } from "react";
import { StyleSheet, StatusBar, ScrollView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { usePostContext } from "../context/PostsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/Navigation";
import MyContacts from "../components/MyContacts";
import CardPost from "../components/CardPost";
import Icon from "@expo/vector-icons/Ionicons";

interface Props extends NativeStackScreenProps<RootStackParams> {}

export default function HomeScreen({ navigation }: Props) {
  const { images, getPosts, setImages } = usePostContext();

  const isFocused = useIsFocused();

  useEffect(() => {
    loadPosts();
  }, [isFocused]);

  const loadPosts = async () => {
    const posts = await getPosts();

    setImages(posts);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#FAF8F1" barStyle="dark-content" />
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 14,
        }}
      >
        <Icon
          name="camera"
          size={28}
          color="#FD841F"
          onPress={() => navigation.navigate("PickerImageScreen")}
        />
        <Icon name="chatbubble-ellipses" size={28} color="#FD841F" />
      </View>
      <MyContacts />
      {images.length > 0 &&
        images.map((item, index) => <CardPost key={index} post={item} />)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
  },
});
