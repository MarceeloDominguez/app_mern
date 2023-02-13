import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ProfileInformation from "../components/ProfileInformation";
import ProfileAvatar from "../components/ProfileAvatar";
import GridImageProfile from "../components/GridImageProfile";
import Videos from "../components/Videos";
import Tagged from "../components/Tagged";

const tabs = [{ name: "Photos" }, { name: "Videos" }, { name: "Tagged" }];

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [index, setindex] = useState(0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Icon
          name="chevron-back-outline"
          size={25}
          color="#202020"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.titleHeader}>My Profile</Text>
        <Icon name="settings" size={25} color="#202020" />
      </View>
      <ProfileAvatar />
      <ProfileInformation />

      <View style={styles.wrapTabs}>
        <View style={styles.containerTabs}>
          {tabs.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setindex(i)}
              style={[
                styles.tabs,
                { backgroundColor: index === i ? "#202020" : "#FAF8F1" },
              ]}
            >
              <Text
                style={[
                  styles.nameTabs,
                  { color: index === i ? "#fff" : "#787A91" },
                ]}
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
        <Icon name="ellipsis-horizontal" size={25} color="#202020" />
      </View>
      {index === 0 && <GridImageProfile />}
      {index === 1 && <Videos />}
      {index === 2 && <Tagged />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F1",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: "#202020",
    letterSpacing: 0.4,
  },
  containerTabs: {
    flexDirection: "row",
  },
  tabs: {
    width: 72,
    marginRight: 10,
    paddingVertical: 7,
    alignItems: "center",
    borderRadius: 50,
  },
  nameTabs: {
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 14,
  },
  wrapTabs: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 34,
    marginBottom: 16,
    marginHorizontal: 20,
    alignItems: "center",
  },
});
