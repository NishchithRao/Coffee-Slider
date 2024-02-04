import { BaseTrack, BaseTrackProps } from "./BaseTrack";

import Label from "./Label";
import { View } from "react-native";

export interface ProgressBarProps extends Omit<BaseTrackProps, "children"> {
  value: number;
  label?: string;
  translate?: number;
}

const LeftProgressBar = ({
  value = 0,
  animatedRef,
  label,
  translate,
}: ProgressBarProps) => {
  const bgAlpha = value < 0.5 ? 0.5 : 1;
  const bg = `rgba(42,19,3,${bgAlpha})`;
  return (
    <BaseTrack animatedRef={animatedRef} bg={bg}>
      <View>
        <Label
          translateValue={translate}
          value={value}
          label={label}
          color="#d15d21"
        />
      </View>
    </BaseTrack>
  );
};

export { LeftProgressBar };
