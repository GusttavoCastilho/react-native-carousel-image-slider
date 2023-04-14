import {
  GestureResponderEvent,
  ImageResizeMode,
  ImageStyle,
  ViewStyle,
} from "react-native";

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

declare function CarouselSlider(props: CarouselProps): JSX.Element;

export { CarouselSlider };
