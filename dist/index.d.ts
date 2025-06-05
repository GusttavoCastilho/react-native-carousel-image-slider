import {
  GestureResponderEvent,
  ImageResizeMode,
  ImageStyle,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
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
  showNavigationButtons?: boolean;
  navigationButtonColor?: string;
  navigationButtonSize?: number;
  swipeEnabled?: boolean;
  bounceEnabled?: boolean;
  scrollEnabled?: boolean;
  overlayStyle?: ViewStyle;
  captionStyle?: ViewStyle;
  captionTextStyle?: TextStyle;
  loadingIndicator?: React.ReactNode;
  errorComponent?: React.ReactNode;
  onSlideChange?: (index: number) => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onScrollBegin?: () => void;
  onScrollEnd?: () => void;
  initialIndex?: number;
  windowSize?: number;
  maxToRenderPerBatch?: number;
  updateCellsBatchingPeriod?: number;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: string;
  aspectRatio?: number;
  height?: number;
  width?: number;
  longPressEnabled?: boolean;
  onLongPress?: () => void;
};

declare function CarouselSlider(props: CarouselProps): JSX.Element;

export { CarouselSlider };
