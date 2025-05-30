import "@/global.css";
import { Stack, SplashScreen, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import FaceScanSplash from "@/components/SplashScreen/FaceScan";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [expoSplashHidden, setExpoSplashHidden] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.hideAsync();
      setExpoSplashHidden(true);
    })();
  }, []);

  const handleSplashFinish = () => {
    setIsReady(true);
    setTimeout(() => {
      router.replace("/(tabs)");
    }, 50);
  };

  if (!expoSplashHidden) {
    return null;
  }

  if (!isReady) {
    return <FaceScanSplash onFinish={handleSplashFinish} />;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
