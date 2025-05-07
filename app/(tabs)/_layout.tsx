import { Tabs } from "expo-router";
import BottomTab from "@/components/Navigation/BottomTab";
import HeaderLeft from "@/components/Navigation/HeaderLeft";
import { useTheme } from "@/context/ThemeContext";

export default function TabLayout() {
  const { isDark } = useTheme();

  return (
    <Tabs
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerStyle: {
          backgroundColor: isDark ? "#0A1128" : "#F8FAFC",
          borderBottomColor: isDark ? "#ffffff" : "#E2E8F0",
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          color: isDark ? "#E2E8F0" : "#1E293B",
          fontWeight: "600",
        },
        headerTintColor: isDark ? "#E2E8F0" : "#1E293B",
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analysis" options={{ title: "Analysis" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
