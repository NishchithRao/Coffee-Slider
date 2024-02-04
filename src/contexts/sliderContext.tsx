import { Animated } from "react-native";
import { createContext } from "react";
import { useAnimatedValue } from "../hooks/useAnimatedValue";

interface SliderContextProps {
  animatedLeftProgressAnimateRef?: Animated.Value;
  animatedRightProgressAnimateRef?: Animated.Value;
  animatedHeightRef?: Animated.Value;
  value: number;
}

export const SliderContext = createContext<SliderContextProps>({ value: 1 });

export const SliderContextProvider = ({
  children,
  sliderWidth,
}: {
  children: JSX.Element;
  sliderWidth: number;
}) => {
  const { value: leftProgressValue, animatedRef: leftAnimatedRef } =
    useAnimatedValue(1);
  const { value: rightProgressValue, animatedRef: rightAnimatedRef } =
    useAnimatedValue(1);
  const { animatedRef: trackHeightRef } = useAnimatedValue(50);
  return (
    <SliderContext.Provider value={{ value: 1 }}>
      {children}
    </SliderContext.Provider>
  );
};
