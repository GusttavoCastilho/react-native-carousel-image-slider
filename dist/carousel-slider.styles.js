import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  imageContainer: {
    height: 200,
  },
  imageWrapper: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
  },
  imagesIndexes: {
    flexDirection: "row",
    alignSelf: "center",
    paddingRight: 24,
  },
  bullet: {
    width: 10,
    height: 10,
    marginTop: 10,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: "gray",
  },
});
