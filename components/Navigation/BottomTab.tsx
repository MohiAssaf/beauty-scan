import { LayoutChangeEvent, View } from "react-native";
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
      className="absolute flex-row justify-between items-center bottom-10 mx-10 py-4 rounded-2xl bg-white"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            backgroundColor: "#3B82F6",
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
            color={isFocused ? "#fff" : "#64748B"}
            label={label}
          />
        );
      })}
    </View>
  );
}
