import { Tabs } from "expo-router";
import BottomTab from "@/components/Navigation/BottomTab";
import HeaderLeft from "@/components/Navigation/HeaderLeft";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomTab {...props} />}
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analysis" options={{ title: "Analysis" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
