import { getIconComponent } from "@/utils/iconLibrary";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileButton({
  iconName,
  btnText,
  iconLibrary,
  showChevron = true,
}: any) {
  const IconComponent = getIconComponent(iconLibrary);

  return (
    <TouchableOpacity className="flex-row items-center py-4 px-4 border-b border-neutral-200 dark:border-neutral-300-dark">
      <View className="mr-4">
        <IconComponent name={iconName} size={20} color="#2563EB" />
      </View>
      <Text className="flex-1 text-text text-base font-medium">{btnText}</Text>

      {showChevron && (
        <MaterialIcons name="chevron-right" size={20} color="#64748B" />
      )}
    </TouchableOpacity>
  );
}
