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
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  customImageComponent?: (item: string, index: number) => React.ReactNode;
  dotSize?: number;
  dotSpacing?: number;
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  dotsContainerStyle?: ViewStyle;
};

declare function CarouselSlider(props: CarouselProps): JSX.Element;

export { CarouselSlider };
