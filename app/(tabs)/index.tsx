import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.middle}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.bottom}>
        <Box />
        <Box />
        <Box />
      </View>
    </SafeAreaView>
  );
}

function Box() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  top: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottom: {
    flexDirection: "row",
    gap: 5,
  },
});

export default HomeScreen;