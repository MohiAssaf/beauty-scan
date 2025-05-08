import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@/context/ThemeContext";
import ThemedButton from "@/components/Theme/ThemedButton";

export default function ProfileScreen() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView
      className={`flex-1 my-50 ${
        isDark ? "bg-background-dark" : "bg-background"
      }`}
    >
      <ScrollView className="flex-1">
        <View className="items-center py-8">
          <View
            className={`w-24 h-24 rounded-full ${
              isDark ? "bg-primary-dark" : "bg-primary"
            } justify-center items-center mb-4 border-4 ${
              isDark ? "border-accent-dark" : "border-secondary"
            }`}
          >
            <Text className="text-white text-4xl font-bold">U</Text>
          </View>
          <Text
            className={`${
              isDark ? "text-text-dark" : "text-text"
            } text-2xl font-bold mb-1`}
          >
            User
          </Text>
          <Text
            className={`${
              isDark ? "text-neutral-500-dark" : "text-neutral-500"
            } text-sm`}
          >
            email@example.com
          </Text>
        </View>

        <View
          className={`flex-row justify-around ${
            isDark ? "bg-card-dark" : "bg-neutral-100"
          } py-5 mb-6 mx-4 rounded-xl`}
        >
          <View className="items-center flex-1">
            <Text
              className={`${
                isDark ? "text-text-dark" : "text-text"
              } text-xl font-bold mb-1`}
            >
              0
            </Text>
            <Text
              className={`${
                isDark ? "text-neutral-500-dark" : "text-neutral-500"
              } text-sm`}
            >
              Analyses
            </Text>
          </View>
          <View
            className={`w-px ${
              isDark ? "bg-neutral-300-dark" : "bg-neutral-300"
            } h-3/5 self-center`}
          />
          <View className="items-center flex-1">
            <Text
              className={`${
                isDark ? "text-text-dark" : "text-text"
              } text-xl font-bold mb-1`}
            >
              0%
            </Text>
            <Text
              className={`${
                isDark ? "text-neutral-500-dark" : "text-neutral-500"
              } text-sm`}
            >
              Best Score
            </Text>
          </View>
          <View
            className={`w-px ${
              isDark ? "bg-neutral-300-dark" : "bg-neutral-300"
            } h-3/5 self-center`}
          />
          <View className="items-center flex-1">
            <Text
              className={`${
                isDark ? "text-text-dark" : "text-text"
              } text-xl font-bold mb-1`}
            >
              0
            </Text>
            <Text
              className={`${
                isDark ? "text-neutral-500-dark" : "text-neutral-500"
              } text-sm`}
            >
              Days
            </Text>
          </View>
        </View>

        <View
          className={`${
            isDark ? "bg-card-dark" : "bg-neutral-100"
          } mb-6 mx-4 rounded-xl overflow-hidden`}
        >
          <Text
            className={`${
              isDark ? "text-text-dark" : "text-text"
            } text-base font-bold py-4 px-4 border-b ${
              isDark ? "border-neutral-300-dark" : "border-neutral-200"
            }`}
          >
            Account
          </Text>

          <ThemedButton
            iconName="person-outline"
            btnText="Personal Information"
            iconLibrary="material"
          />
          <ThemedButton
            iconName="settings"
            btnText="Settings"
            iconLibrary="feather"
          />
          <ThemedButton
            iconName="clock-outline"
            btnText="Analysis History"
            iconLibrary="material-community"
          />
        </View>

        <View
          className={`${
            isDark ? "bg-card-dark" : "bg-neutral-100"
          } mb-6 mx-4 rounded-xl overflow-hidden`}
        >
          <Text
            className={`${
              isDark ? "text-text-dark" : "text-text"
            } text-base font-bold py-4 px-4 border-b ${
              isDark ? "border-neutral-300-dark" : "border-neutral-200"
            }`}
          >
            About
          </Text>

          <View className="flex-row items-center py-4 px-4 border-b border-neutral-200 dark:border-neutral-300-dark">
            <View className="mr-4">
              <MaterialIcons
                name="color-lens"
                size={20}
                color={isDark ? "#4F9BFF" : "#2563EB"}
              />
            </View>
            <Text
              className={`flex-1 ${
                isDark ? "text-text-dark" : "text-text"
              } text-base font-medium`}
            >
              Dark Mode
            </Text>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: "#E2E8F0", true: "#243356" }}
              thumbColor={isDark ? "#4F9BFF" : "#3B82F6"}
            />
          </View>

          <ThemedButton
            iconName="info-outline"
            btnText="About Face Scanner"
            iconLibrary="material"
          />
          <ThemedButton
            iconName="privacy-tip"
            btnText="Privacy Policy"
            iconLibrary="material"
          />
          <ThemedButton
            iconName="description"
            btnText="Terms of Service"
            iconLibrary="material"
          />
        </View>

        <TouchableOpacity
          className={`flex-row items-center justify-center ${
            isDark ? "bg-card-dark" : "bg-neutral-100"
          } py-4 mx-4 mb-36 rounded-xl`}
        >
          <MaterialIcons
            name="logout"
            size={20}
            color={isDark ? "#FF6B6B" : "#EF4444"}
          />
          <Text
            className={`${
              isDark ? "text-error-dark" : "text-error"
            } ml-2 text-base font-medium`}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
