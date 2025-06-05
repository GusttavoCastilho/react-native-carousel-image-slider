# 🎠 React Native Carousel Image Slider

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-native-carousel-image-slider.svg?style=flat-square)](https://www.npmjs.com/package/react-native-carousel-image-slider)
[![npm downloads](https://img.shields.io/npm/dm/react-native-carousel-image-slider.svg?style=flat-square&color=success)](https://www.npmjs.com/package/react-native-carousel-image-slider)
[![GitHub stars](https://img.shields.io/github/stars/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=success)](https://github.com/GusttavoCastilho/react-native-carousel-image-slider)
[![GitHub issues](https://img.shields.io/github/issues/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=blue)](https://github.com/GusttavoCastilho/react-native-carousel-image-slider/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=blue)](https://github.com/GusttavoCastilho/react-native-carousel-image-slider/pulls)
[![License](https://img.shields.io/github/license/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square)](https://github.com/GusttavoCastilho/react-native-carousel-image-slider/blob/main/LICENSE)

A modern, customizable, and high-performance carousel slider component for React Native applications. Perfect for showcasing images, banners, or any content that needs a smooth sliding experience.

</div>

## ✨ Features

- 🎯 Fully customizable
- 📱 iOS and Android support
- 🎨 Customizable dots and styling
- 🔄 Auto-play functionality
- ♾️ Infinite loop support
- 🖼️ Custom image component support
- ⚡️ High performance
- 📦 Zero dependencies
- 🔍 TypeScript support

## 📋 Requirements

- React Native >= 0.72.0
- React >= 18.0.0

## 🚀 Installation

```bash
# Using npm
npm install react-native-carousel-image-slider

# Using yarn
yarn add react-native-carousel-image-slider
```

## 🎮 Basic Usage

### Function Component Example

```jsx
import React, { useState } from "react";
import { View } from "react-native";
import { CarouselSlider } from "react-native-carousel-image-slider";

export default function App() {
  const [images, setImages] = useState([]);

  return (
    <View style={{ width: "100%", flex: 1, padding: 24 }}>
      <CarouselSlider images={images} />
    </View>
  );
}
```

### Class Component Example

```jsx
import React from "react";
import { View } from "react-native";
import { CarouselSlider } from "react-native-carousel-image-slider";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  render() {
    return (
      <View style={{ width: "100%", flex: 1, padding: 24 }}>
        <CarouselSlider images={this.state.images} />
      </View>
    );
  }
}
```

## 🎨 Advanced Usage

### Using Local Images

```jsx
import React from "react";
import { View } from "react-native";
import { CarouselSlider } from "react-native-carousel-image-slider";

export default function App() {
  const images = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
  ];

  return (
    <View style={{ width: "100%", flex: 1, padding: 24 }}>
      <CarouselSlider images={images} />
    </View>
  );
}
```

### Using Custom Image Component

```jsx
import React from "react";
import { View, Image, Text } from "react-native";
import { CarouselSlider } from "react-native-carousel-image-slider";

export default function App() {
  const images = [
    { uri: 'https://example.com/image1.jpg', title: 'Image 1' },
    { uri: 'https://example.com/image2.jpg', title: 'Image 2' },
  ];

  const CustomImage = (item, index) => (
    <View>
      <Image source={{ uri: item.uri }} style={{ width: 300, height: 200 }} />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ width: "100%", flex: 1, padding: 24 }}>
      <CarouselSlider 
        images={images}
        customImageComponent={CustomImage}
        autoPlay={true}
        autoPlayInterval={2000}
      />
    </View>
  );
}
```

## 📚 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | Array | required | Array of image sources (URL strings or require() objects) |
| `renderDots` | boolean | true | Whether to show pagination dots |
| `onImagePress` | function | undefined | Callback when an image is pressed |
| `activeDotColor` | string | 'red' | Color of the active dot |
| `inactiveDotColor` | string | 'gray' | Color of inactive dots |
| `dotStyle` | ViewStyle | undefined | Custom style for dots |
| `dotSize` | number | 8 | Size of the dots |
| `dotSpacing` | number | 4 | Spacing between dots |
| `resizeMethod` | 'auto' \| 'resize' \| 'scale' | 'auto' | Image resize method |
| `resizeMode` | ImageResizeMode | 'cover' | Image resize mode |
| `imageStyle` | ImageStyle | undefined | Custom style for images |
| `disabledOnPress` | boolean | false | Disable image press |
| `buttonActiveOpacity` | number | 1 | Opacity when pressing images |
| `autoPlay` | boolean | false | Enable auto-play |
| `autoPlayInterval` | number | 3000 | Interval between auto-play slides (ms) |
| `loop` | boolean | true | Enable infinite loop |
| `customImageComponent` | function | undefined | Custom component to render images |
| `containerStyle` | ViewStyle | undefined | Custom style for the container |
| `imageContainerStyle` | ViewStyle | undefined | Custom style for the image container |
| `dotsContainerStyle` | ViewStyle | undefined | Custom style for the dots container |

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Gustavo Castilho** - [GitHub](https://github.com/GusttavoCastilho)

## ⭐️ Show your support

Give a ⭐️ if this project helped you!