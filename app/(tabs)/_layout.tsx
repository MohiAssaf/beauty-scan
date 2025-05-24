import { Tabs } from "expo-router";
import BottomTab from "@/components/Navigation/BottomTab";
import HeaderLeft from "@/components/Navigation/HeaderLeft";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerStyle: {
          backgroundColor: "#F8FAFC",
          borderBottomColor: "#E2E8F0",
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          color: "#1E293B",
          fontWeight: "600",
        },
        headerTintColor: "#1E293B",
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analysis" options={{ title: "Analysis" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
