import { LayoutChangeEvent, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabButton from "./TabButton";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function BottomTab({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useTheme();
  const [dimensions, setDimensions] = useState({ height: 20, width: 20 });
  const buttonWidth = dimensions.width / state.routes.length;
  const tabPositionX = useSharedValue(0);

  const onTabBarLayoutChange = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View
      onLayout={onTabBarLayoutChange}
      className="absolute flex-row justify-between items-center bottom-10 bg-white mx-10 py-5 rounded-2xl shadow-lg"
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "#4682B4",
            borderRadius: 30,
            marginHorizontal: 12,
            height: dimensions.height - 15,
            width: buttonWidth - 25,
          },
          animatedTabStyle,
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 1500,
          });

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={route.name}
            isFocused={isFocused}
            color={isFocused ? "#fff" : colors.text}
            label={label}
          />
        );
      })}
    </View>
  );
}
