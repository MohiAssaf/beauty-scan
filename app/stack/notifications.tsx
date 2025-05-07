import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function NotificationsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-start items-center pt-10">
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        className="bg-blue-500 rounded-lg px-3 py-3 flex items-center m-5 absolute top-16 left-2 z-1"
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View className="flex-1 justify-start items-center px-9 w-full mt-20">
        <Text>Notifications Screen</Text>
      </View>
    </SafeAreaView>
  );
}
