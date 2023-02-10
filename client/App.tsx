import Navigation from "./src/navigations/Navigation";
import { PostsProvider } from "./src/context/PostsContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PostsProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PostsProvider>
  );
}
