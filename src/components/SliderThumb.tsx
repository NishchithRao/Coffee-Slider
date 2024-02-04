import { Animated, PanResponder, StyleSheet } from "react-native";

import { useRef } from "react";

interface SliderProps {
  listener?: (value: number) => void;
}

const SliderThumb = ({ listener }: SliderProps) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { moveX }) => {
        listener(moveX);
      },
      onPanResponderStart: () => true,
      onPanResponderRelease: () => {
        return true;
      },
    })
  ).current;

  return (
    <Animated.View {...panResponder.panHandlers} style={[styles.container]} />
  );
};

export { SliderThumb };

const styles = StyleSheet.create({
  container: {
    width: 5,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 3,
    transformOrigin: "bottom",
  },
});
