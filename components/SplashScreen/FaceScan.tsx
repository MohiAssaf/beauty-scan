import React, { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import LottieView from "lottie-react-native";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function FaceScanSplash({ onFinish }: SplashScreenProps) {
  const animationRef = useRef<LottieView>(null);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    animationRef.current?.play();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(onFinish);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationFailure = () => {
    if (__DEV__) console.log("Animation failed - using fallback");
    onFinish();
  };

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
        style={{
          width: Platform.select({ ios: "40%", android: "50%" }),
          aspectRatio: 1,
          maxWidth: 300,
        }}
        loop={false}
        resizeMode="contain"
        renderMode="AUTOMATIC"
        speed={1}
        onAnimationFailure={handleAnimationFailure}
      />
    </Animated.View>
  );
}
