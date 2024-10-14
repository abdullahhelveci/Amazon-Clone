import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
    >
      <Feather name="map-pin" size={16} color={"#000000"} />
      <Text style={styles.deliver}>Deliver to Turkey -232442</Text>
      <SimpleLineIcons name="arrow-down" color={"#000000"} size={10} />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  deliver: {
    fontSize: 13,
    color: "#2c4341",
    padding: 6,
  },
});
