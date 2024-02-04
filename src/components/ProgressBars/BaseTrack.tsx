import { Animated } from "react-native";

export interface BaseTrackProps {
  animatedRef?: Animated.Value;
  children: JSX.Element;
  bg?: string;
  invertedDirection?: boolean;
}

const BaseTrack = ({
  children,
  animatedRef,
  bg,
  invertedDirection,
}: BaseTrackProps) => {
  return (
    <Animated.View
      style={{
        flexDirection: "row",
        flex: animatedRef,
        backgroundColor: bg,
        height: "100%",
        borderRadius: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        justifyContent: invertedDirection ? "flex-end" : "flex-start",
      }}
    >
      {children}
    </Animated.View>
  );
};

export { BaseTrack };
