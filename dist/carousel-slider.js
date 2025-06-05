import React, { useRef, useState } from "react";
import { View, Image, FlatList, TouchableOpacity, Text, ActivityIndicator, Dimensions } from "react-native";

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
  showNavigationButtons = false,
  navigationButtonColor = "#fff",
  navigationButtonSize = 30,
  swipeEnabled = true,
  bounceEnabled = true,
  scrollEnabled = true,
  overlayStyle,
  captionStyle,
  captionTextStyle,
  loadingIndicator,
  errorComponent,
  onSlideChange,
  onScroll,
  onScrollBegin,
  onScrollEnd,
  initialIndex = 0,
  windowSize = 3,
  maxToRenderPerBatch = 3,
  updateCellsBatchingPeriod = 50,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = "image",
  aspectRatio,
  height,
  width,
  longPressEnabled = false,
  onLongPress,
}) => {
  const [imageIndex, setImageIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const flatListRef = useRef(null);

  const indexChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0]?.index ?? 0;
    setImageIndex(index);
    onSlideChange?.(index);
  });

  const renderNavigationButton = (direction) => {
    if (!showNavigationButtons) return null;

    const handlePress = () => {
      const nextIndex = direction === 'next' 
        ? (imageIndex + 1) % images.length
        : (imageIndex - 1 + images.length) % images.length;
      
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.navigationButton,
          direction === 'prev' ? styles.prevButton : styles.nextButton,
          { backgroundColor: navigationButtonColor, width: navigationButtonSize, height: navigationButtonSize }
        ]}
      >
        <Text style={styles.navigationButtonText}>
          {direction === 'prev' ? '←' : '→'}
        </Text>
      </TouchableOpacity>
    );
  };

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
          onLongPress={longPressEnabled ? onLongPress : undefined}
          disabled={disabledOnPress}
          activeOpacity={buttonActiveOpacity}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole={accessibilityRole}
        >
          <Image
            source={imageSource}
            resizeMethod={resizeMethod}
            resizeMode={resizeMode}
            style={[
              styles.image,
              !!imageStyle && imageStyle,
              aspectRatio && { aspectRatio },
              height && { height },
              width && { width },
            ]}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            onError={() => setError(true)}
          />
          {isLoading && (loadingIndicator || <ActivityIndicator style={styles.loading} />)}
          {error && (errorComponent || <Text style={styles.error}>Error loading image</Text>)}
          {overlayStyle && <View style={[styles.overlay, overlayStyle]} />}
          {captionStyle && (
            <View style={[styles.caption, captionStyle]}>
              <Text style={[styles.captionText, captionTextStyle]}>
                {typeof item === 'string' ? item : item.caption}
              </Text>
            </View>
          )}
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
        {renderNavigationButton('prev')}
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
          swipeEnabled={swipeEnabled}
          bounces={bounceEnabled}
          scrollEnabled={scrollEnabled}
          onScroll={onScroll}
          onScrollBeginDrag={onScrollBegin}
          onScrollEndDrag={onScrollEnd}
          windowSize={windowSize}
          maxToRenderPerBatch={maxToRenderPerBatch}
          updateCellsBatchingPeriod={updateCellsBatchingPeriod}
          initialScrollIndex={initialIndex}
          getItemLayout={(_, index) => ({
            length: width || Dimensions.get('window').width,
            offset: (width || Dimensions.get('window').width) * index,
            index,
          })}
        />
        {renderNavigationButton('next')}
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
