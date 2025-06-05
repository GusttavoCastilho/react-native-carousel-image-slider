import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

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
    position: "relative",
  },
  imageWrapper: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: screenWidth,
    height: 180,
    aspectRatio: 1,
  },
  imagesIndexes: {
    flexDirection: "row",
    alignSelf: "center",
    paddingRight: 24,
    position: "absolute",
    zIndex: 1,
  },
  bullet: {
    width: 10,
    height: 10,
    marginTop: 10,
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: "gray",
  },
  navigationButton: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -15 }],
    zIndex: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  prevButton: {
    left: 10,
  },
  nextButton: {
    right: 10,
  },
  navigationButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  caption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  captionText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
  },
  error: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -10 }],
    color: "red",
    textAlign: "center",
  },
});
