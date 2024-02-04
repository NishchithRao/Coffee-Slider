import { LeftProgressBar, RightProgressBar } from "./ProgressBars";
import { useCallback, useState } from "react";

import { SliderThumb } from "./SliderThumb";
import { Track } from "./Track";
import { View } from "react-native";
import { useAnimatedValue } from "../hooks/useAnimatedValue";

const WIDTH = 350;
const HEIGHT = 50;

interface ProgressProps {
  initialValue?: number;
  onChange?: (value: number) => void;
  leftLabel?: string;
  rightLabel?: string;
}

const Slider = ({
  initialValue,
  leftLabel,
  rightLabel,
  onChange,
}: ProgressProps) => {
  const { value: leftProgressValue, animatedRef: leftAnimatedRef } =
    useAnimatedValue(initialValue);
  const { value: rightProgressValue, animatedRef: rightAnimatedRef } =
    useAnimatedValue(initialValue);
  const [height, setHeight] = useState(HEIGHT);

  const [sliderX, setSliderX] = useState(0);

  const listener = useCallback((v: number) => {
    const change = v - sliderX;
    const percent = change / WIDTH;
    if (percent < 0.3 || 1 - percent < 0.3) setHeight(HEIGHT / 2);
    else setHeight(HEIGHT);
    onChange?.(percent);
    leftAnimatedRef.setValue(percent);
    rightAnimatedRef.setValue(1 - percent);
  }, []);

  return (
    <View
      style={{
        height: HEIGHT,
        justifyContent: "flex-end",
      }}
      onLayout={(ev) => {
        setSliderX(ev.nativeEvent.layout.x);
      }}
    >
      <Track height={height}>
        <LeftProgressBar
          animatedRef={leftAnimatedRef}
          value={leftProgressValue}
          label={leftLabel}
          translate={height === HEIGHT ? 0 : HEIGHT / 2}
        />

        <SliderThumb listener={listener} />

        <RightProgressBar
          label={rightLabel}
          animatedRef={rightAnimatedRef}
          value={rightProgressValue}
          translate={height === HEIGHT ? 0 : HEIGHT / 2}
        />
      </Track>
    </View>
  );
};

export { Slider };
