import React, { useRef, useState } from "react";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./carousel-slider.styles";

const CarouselSlider = ({
  images,
  renderDots = true,
  onImagePress,
  activeDotColor,
  inactiveDotColor,
  dotStyle,
  resizeMethod = "auto",
  resizeMode = "cover",
  imageStyle,
  disabledOnPress = false,
  buttonActiveOpacity = 1,
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0].index;
    setImageIndex(index);
  });

  const renderDot = (index) => {
    const isCurrentImage = index === imageIndex;
    const dotColor = isCurrentImage
      ? activeDotColor ?? "red"
      : inactiveDotColor ?? "gray";
    return (
      <View
        key={index}
        style={[
          styles.bullet,
          !!dotStyle && dotStyle,
          { backgroundColor: dotColor },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FlatList
          data={images}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <View style={styles.imageWrapper}>
              <TouchableOpacity
                onPress={onImagePress}
                disabled={disabledOnPress}
                activeOpacity={buttonActiveOpacity}
              >
                <Image
                  source={{ uri: item }}
                  resizeMethod={resizeMethod}
                  resizeMode={resizeMode}
                  style={[styles.image, !!imageStyle && imageStyle]}
                />
              </TouchableOpacity>
            </View>
          )}
          horizontal
          onViewableItemsChanged={indexChanged.current}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
      </View>
      {renderDots && (
        <View style={styles.imagesIndexes}>
          {images.map((_, index) => renderDot(index))}
        </View>
      )}
    </View>
  );
};

export {
  CarouselSlider
}
