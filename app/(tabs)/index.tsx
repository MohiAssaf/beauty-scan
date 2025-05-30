import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/colors";
import { HOWITWORKS } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#F8FAFC]">
      <ScrollView
        className="flex-1"
        style={{ backgroundColor: COLORS.background.light }}
      >
        <View className="mx-4 mt-4 rounded-2xl overflow-hidden shadow-lg">
          <LinearGradient
            colors={[COLORS.primary.from, COLORS.primary.to]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <View className="flex w-28 h-28 rounded-full justify-center items-center mb-6 border-[6px] border-white/20 bg-white/10">
              <View className="absolute w-full h-full rounded-full border-[3px] border-white/30" />
              <Ionicons name="sparkles" size={50} color="white" />
            </View>
            <Text className="text-white text-4xl font-bold mb-2">
              Beauty Scanner
            </Text>
            <Text className="text-white/80 text-lg font-medium">
              Your AI Plastic Surgery Advisor
            </Text>
          </LinearGradient>
        </View>

        <View className="mx-4 my-6 p-6 rounded-2xl bg-white shadow-md">
          <Text
            className="text-2xl font-bold mb-3"
            style={{ color: COLORS.text.dark }}
          >
            Discover Your Best Look
          </Text>
          <Text className="mb-6" style={{ color: COLORS.text.light }}>
            Get personalized recommendations for facial enhancements based on AI
            analysis
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/analysis")}
            className="overflow-hidden rounded-xl"
          >
            <LinearGradient
              colors={[COLORS.primary.from, COLORS.primary.to]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <Text className="text-white font-bold text-lg">
                Start Free Analysis
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View className="mx-4 mb-8">
          <Text
            className="text-xl font-bold mb-4"
            style={{ color: COLORS.text.dark }}
          >
            How It Works
          </Text>

          {HOWITWORKS.map((feature: any, index) => (
            <View
              key={index}
              className="flex-row items-center p-4 mb-3 rounded-xl bg-white shadow-sm"
            >
              <View
                className="w-12 h-12 rounded-full items-center justify-center mr-4"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <MaterialIcons
                  name={feature.icon}
                  size={24}
                  color={feature.color}
                />
              </View>
              <View className="flex-1">
                <Text className="font-bold" style={{ color: COLORS.text.dark }}>
                  {feature.title}
                </Text>
                <Text className="text-sm" style={{ color: COLORS.text.light }}>
                  {feature.description}
                </Text>
              </View>
              <Text style={{ color: COLORS.text.light }}>{index + 1}</Text>
            </View>
          ))}
        </View>

        <View className="mx-4 mb-36 p-6 rounded-2xl bg-white shadow-md">
          <View className="flex-row items-center mb-4">
            <Image
              source={require("@/assets/images/avatar.png")}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View>
              <Text className="font-medium" style={{ color: COLORS.text.dark }}>
                Jessica T.
              </Text>
              <Text className="text-sm" style={{ color: COLORS.text.light }}>
                Verified User
              </Text>
            </View>
          </View>
          <Text
            className="italic text-lg"
            style={{ color: COLORS.text.medium }}
          >
            "The AI suggested subtle changes I never considered. My confidence
            has never been higher!"
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
