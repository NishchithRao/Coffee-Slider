import { Text, View } from "react-native";

import { ProgressBarProps } from "./LeftProgressBar";
import { getDisplayValue } from "../../utils";

interface LabelProps extends Pick<ProgressBarProps, "label" | "value"> {
  color: string;
  translateValue?: number;
}

export default function Label({
  label,
  value,
  translateValue = 0,
  color,
}: LabelProps) {
  const visibleValue = getDisplayValue(value);
  return (
    <View
      style={{
        flexDirection: "row",
        minHeight: 20,
        gap: 6,
        transform: [{ translateY: -1 * translateValue }],
      }}
    >
      <Text style={{ color: color, fontWeight: "900", fontSize: 18 }}>
        {label}
      </Text>
      <Text style={{ color: color, fontSize: 18 }}>{visibleValue}</Text>
    </View>
  );
}
