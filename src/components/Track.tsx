import { Animated, StyleSheet, View } from "react-native";

interface TrackProps {
  children: JSX.Element[];
  height?: number;
}

export const Track = ({ children, height }: TrackProps) => {
  return (
    <Animated.View style={[styles.container, { height }]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 5,
    width: 350,
    alignItems: "center",
  },
});
