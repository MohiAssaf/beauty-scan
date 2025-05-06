import "@/global.css";
import { Slot, SplashScreen } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import FaceScanSplash from "@/components/SplashScreen/FaceScan";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  const handleSplashFinish = async () => {
    await SplashScreen.hideAsync();
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  };

  if (!isReady) {
    return <FaceScanSplash onFinish={handleSplashFinish} />;
  }

  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
