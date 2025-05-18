import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileButton from "@/components/Profile/ProfileButton";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView
        contentContainerStyle={{ paddingVertical: 24 }}
        className="px-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mb-8">
          <View className="w-28 h-28 rounded-full bg-blue-700 justify-center items-center mb-5 border-4 border-blue-300 shadow-lg">
            <Text className="text-white text-5xl font-extrabold">U</Text>
          </View>
          <Text className="text-gray-900 text-3xl font-semibold mb-1">
            User
          </Text>
          <Text className="text-gray-500 text-sm tracking-wide">
            email@example.com
          </Text>
        </View>

        <View className="flex-row justify-between bg-white shadow-md rounded-xl py-6 px-8 mb-10">
          <View className="items-center flex-1">
            <Text className="text-gray-900 text-2xl font-bold mb-1">0</Text>
            <Text className="text-gray-500 text-xs uppercase tracking-wider">
              Analyses
            </Text>
          </View>
          <View className="w-px bg-gray-300 h-10 self-center" />
          <View className="items-center flex-1">
            <Text className="text-gray-900 text-2xl font-bold mb-1">0%</Text>
            <Text className="text-gray-500 text-xs uppercase tracking-wider">
              Best Score
            </Text>
          </View>
          <View className="w-px bg-gray-300 h-10 self-center" />
          <View className="items-center flex-1">
            <Text className="text-gray-900 text-2xl font-bold mb-1">0</Text>
            <Text className="text-gray-500 text-xs uppercase tracking-wider">
              Days
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
          <Text className="text-gray-900 text-lg font-semibold py-4 px-6 border-b border-gray-200">
            Account
          </Text>

          <ProfileButton
            iconName="person-outline"
            btnText="Personal Information"
            iconLibrary="material"
          />
          <ProfileButton
            iconName="settings"
            btnText="Settings"
            iconLibrary="feather"
          />
          <ProfileButton
            iconName="clock-outline"
            btnText="Analysis History"
            iconLibrary="material-community"
          />
        </View>

        <View className="bg-white rounded-xl overflow-hidden shadow-md mb-10">
          <Text className="text-gray-900 text-lg font-semibold py-4 px-6 border-b border-gray-200">
            About
          </Text>

          <ProfileButton
            iconName="info-outline"
            btnText="About Face Scanner"
            iconLibrary="material"
          />
          <ProfileButton
            iconName="privacy-tip"
            btnText="Privacy Policy"
            iconLibrary="material"
          />
          <ProfileButton
            iconName="description"
            btnText="Terms of Service"
            iconLibrary="material"
          />
        </View>

        <TouchableOpacity className="flex-row items-center justify-center bg-white py-4 rounded-xl shadow-md mb-20">
          <MaterialIcons name="logout" size={22} color="#DC2626" />
          <Text className="text-red-600 ml-3 text-base font-semibold">
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
