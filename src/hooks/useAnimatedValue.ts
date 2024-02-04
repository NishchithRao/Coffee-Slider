import { useEffect, useRef, useState } from "react";

import { Animated } from "react-native";

export const useAnimatedValue = (initialValue: number) => {
  const animatedRef = useRef(new Animated.Value(initialValue)).current;
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const id = animatedRef.addListener(({ value }) => {
      setValue(value);
    });
    return () => animatedRef.removeListener(id);
  }, []);
  return { value, animatedRef };
};
