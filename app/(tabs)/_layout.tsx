import { Tabs } from "expo-router";
import BottomTab from "@/components/BottomTab";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <BottomTab {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="analyze" options={{ title: "Analyze" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
