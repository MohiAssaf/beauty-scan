import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function HeaderLeft() {
  const { isDark } = useTheme();
  const router = useRouter();

  return (
    <TouchableOpacity
      className="ml-5"
      onPress={() => {
        router.push("/stack/notifications");
      }}
    >
      <Ionicons
        name="notifications"
        size={24}
        color={isDark ? "white" : "black"}
      />
    </TouchableOpacity>
  );
}
