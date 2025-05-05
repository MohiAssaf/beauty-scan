import { PlatformPressable } from "@react-navigation/elements";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

export default function TabButton({
  onPress,
  onLongPress,
  routeName,
  isFocused,
  color,
  label,
}: any) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconSize = useAnimatedStyle(() => {
    const size = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);

    return {
      transform: [
        {
          scale: size,
        },
      ],
      top: top,
    };
  });

  const animtedBtnText = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return { opacity };
  });
  return (
    <PlatformPressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 justify-center items-center gap-2"
    >
      <Animated.View style={animatedIconSize}>
        <Ionicons
          name={
            routeName === "index"
              ? "home"
              : routeName === "analyze"
              ? "camera"
              : routeName === "profile"
              ? "person"
              : "help-circle"
          }
          size={20}
          color={color}
        />
      </Animated.View>

      <Animated.Text style={[{ color: color }, animtedBtnText]}>
        {label}
      </Animated.Text>
    </PlatformPressable>
  );
}
