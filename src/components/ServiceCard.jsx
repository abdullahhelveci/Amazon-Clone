import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outherContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.imgStyle} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  outherContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000",
  },
  imgStyle: {
    width: "100%",
    height: 130,
  },
});
