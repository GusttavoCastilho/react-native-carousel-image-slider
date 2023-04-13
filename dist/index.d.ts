import {
  GestureResponderEvent,
  ImageResizeMode,
  ImageStyle,
  ViewStyle,
  ViewToken,
} from "react-native";

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

type ResizeMethodProps = "auto" | "resize" | "scale";

type CarouselProps = {
  images: string[];
  renderDots?: boolean;
  onImagePress?: ((event: GestureResponderEvent) => void) | undefined;
  activeDotColor?: string;
  inactiveDotColor?: string;
  dotStyle?: ViewStyle;
  resizeMethod?: ResizeMethodProps;
  resizeMode?: ImageResizeMode;
  imageStyle?: ImageStyle;
  disabledOnPress?: boolean;
  buttonActiveOpacity?: number;
};

export { ChangeImageProps, CarouselProps };
