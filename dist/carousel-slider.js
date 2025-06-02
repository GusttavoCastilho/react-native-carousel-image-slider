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
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = true,
  customImageComponent,
  dotSize = 8,
  dotSpacing = 4,
  containerStyle,
  imageContainerStyle,
  dotsContainerStyle,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const flatListRef = useRef(null);

  const indexChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0]?.index ?? 0;
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
          { 
            backgroundColor: dotColor,
            width: dotSize,
            height: dotSize,
            marginHorizontal: dotSpacing / 2,
            borderRadius: dotSize / 2,
          },
        ]}
      />
    );
  };

  const renderImage = ({ item }) => {
    if (customImageComponent) {
      return customImageComponent(item, imageIndex);
    }

    const imageSource = typeof item === 'string' 
      ? { uri: item }
      : item;

    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity
          onPress={onImagePress}
          disabled={disabledOnPress}
          activeOpacity={buttonActiveOpacity}
        >
          <Image
            source={imageSource}
            resizeMethod={resizeMethod}
            resizeMode={resizeMode}
            style={[styles.image, !!imageStyle && imageStyle]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  React.useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        const nextIndex = (imageIndex + 1) % images.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, imageIndex, images.length]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderImage}
          horizontal
          onViewableItemsChanged={indexChanged.current}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          loop={loop}
        />
      </View>
      {renderDots && (
        <View style={[styles.imagesIndexes, dotsContainerStyle]}>
          {images.map((_, index) => renderDot(index))}
        </View>
      )}
    </View>
  );
};

export {
  CarouselSlider
}
