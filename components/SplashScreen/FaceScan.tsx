import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import LottieView from "lottie-react-native";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function FaceScanSplash({ onFinish }: SplashScreenProps) {
  const animationRef = useRef<LottieView>(null);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        onFinish();
      });
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        opacity: opacity,
      }}
    >
      <LottieView
        ref={animationRef}
        source={require("@/assets/Animation-facescan.json")}
        style={{ width: "40%", aspectRatio: 1 }}
        loop={false}
        resizeMode="contain"
        autoPlay
      />
    </Animated.View>
  );
}
