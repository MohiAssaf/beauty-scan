import { useTheme } from "@/context/ThemeContext";
import { getIconComponent } from "@/utils/iconLibrary";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ThemedButton({
  iconName,
  btnText,
  iconLibrary,
  showChevron = true,
}: any) {
  const { isDark } = useTheme();
  const IconComponent = getIconComponent(iconLibrary);

  return (
    <TouchableOpacity className="flex-row items-center py-4 px-4 border-b border-neutral-200 dark:border-neutral-300-dark">
      <View className="mr-4">
        <IconComponent
          name={iconName}
          size={20}
          color={isDark ? "#4F9BFF" : "#2563EB"}
        />
      </View>
      <Text
        className={`flex-1 ${
          isDark ? "text-text-dark" : "text-text"
        } text-base font-medium`}
      >
        {btnText}
      </Text>

      {showChevron && (
        <MaterialIcons
          name="chevron-right"
          size={20}
          color={isDark ? "#94A3C8" : "#64748B"}
        />
      )}
    </TouchableOpacity>
  );
}
