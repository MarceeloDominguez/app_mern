import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { usePostContext } from "../context/PostsContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/Navigation";
import MyContacts from "../components/MyContacts";

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
      <StatusBar />
      <MyContacts />
      {images.length > 0 &&
        images.map((item, index) => {
          return (
            <View key={index}>
              <Image
                source={{ uri: item.image.url }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          );
        })}
      <TouchableOpacity
        onPress={() => navigation.navigate("PickerImageScreen")}
      >
        <Text style={{ color: "#fff" }}>Ir a botones</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
