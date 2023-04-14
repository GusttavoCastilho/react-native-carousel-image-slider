<h1 align="center">React Native Carousel Image Slider</h1>
A simple and fully customizable React Native Carousel Slider component, support to IOS and Android.

<br>
<br>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-carousel-image-slider">
    <img src="https://img.shields.io/npm/v/react-native-carousel-image-slider.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/react-native-carousel-image-slider">
    <img src="https://img.shields.io/npm/dm/react-native-carousel-image-slider.svg?style=flat-square&color=success">
  </a>
  <a href="https://github.com/GusttavoCastilho/react-native-carousel-image-slider">
    <img src="https://img.shields.io/github/stars/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=success"/>
  </a>
  <a href="https://github.com/GusttavoCastilho/react-native-carousel-image-slider/issues">
    <img src="https://img.shields.io/github/issues/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=blue"/>
  </a>
  <a href="https://github.com/GusttavoCastilho/react-native-carousel-image-slider/pulls">
    <img src="https://img.shields.io/github/issues-pr/GusttavoCastilho/react-native-carousel-image-slider?style=flat-square&color=blue"/>
  </a>
</p>

<br>

## Installation

```bash
$ npm i --save react-native-carousel-image-slider
```

OR

```bash
$ yarn add react-native-carousel-image-slider
```

## Basic Usage

- ### Class Component:

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

- ### Function Component:

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

## Props

- `images:` string[];
- `renderDots?:` boolean;
- `onImagePress?:` ((event: GestureResponderEvent) => void) | undefined;
- `activeDotColor?:` string;
- `inactiveDotColor?:` string;
- `dotStyle?:` ViewStyle;
- `resizeMethod?:` "auto" | "resize" | "scale";
- `resizeMode?:` ImageResizeMode;
- `imageStyle?:` ImageStyle;
- `disabledOnPress?:` boolean;
- `buttonActiveOpacity?:` number;

## Contributing

- Fork or clone this repository

```bash
  $ git clone https://github.com/GusttavoCastilho/react-native-carousel-image-slider.git
```