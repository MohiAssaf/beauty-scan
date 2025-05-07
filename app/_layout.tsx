import "@/global.css";
import { Stack, SplashScreen, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import FaceScanSplash from "@/components/SplashScreen/FaceScan";
import { ThemeProvider } from "@/context/ThemeContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const handleSplashFinish = async () => {
    await SplashScreen.hideAsync();
    setIsReady(true);

    setTimeout(() => {
      router.replace("/(tabs)");
    }, 50);
  };

  if (!isReady) {
    return <FaceScanSplash onFinish={handleSplashFinish} />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="stack" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
