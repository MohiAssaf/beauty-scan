import {
  ActivityIndicator,
  Button,
  Linking,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  CameraView,
  CameraType,
  useCameraPermissions,
  PermissionStatus,
} from "expo-camera";
import { useState, useEffect } from "react";

const { height: screenHeight } = Dimensions.get("window");

export default function AnalysisScreen() {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const openSettings = () => {
    Linking.openSettings().catch(() => {
      Alert.alert("Unable to open settings");
    });
  };

  useEffect(() => {
    if (permission?.granted) {
      setIsCameraReady(true);
    }
  }, [permission]);

  if (!permission) {
    return <ActivityIndicator size="large" />;
  }

  if (!permission.granted) {
    const isDeniedPermanently =
      permission.status === PermissionStatus.DENIED && !permission.canAskAgain;

    return (
      <View className="flex-1 justify-center items-center bg-white/80 px-6">
        <Text className="text-center mb-4 text-base text-black">
          {isDeniedPermanently
            ? "Camera permission was permanently denied. Please enable it in settings."
            : "We need your permission to show the camera"}
        </Text>
        {isDeniedPermanently ? (
          <Button
            onPress={openSettings}
            title="Open Settings"
            color="#007AFF"
          />
        ) : (
          <Button
            onPress={requestPermission}
            title="Grant Permission"
            color="#007AFF"
          />
        )}
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function analyzeFace() {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      Alert.alert(
        "Analysis Complete",
        "Your skin looks healthy! Stay hydrated and remember to wear sunscreen."
      );
    }, 2000);
  }

  if (!isCameraReady) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-gray-900">
      <View style={{ height: screenHeight * 0.75 }}>
        <CameraView
          style={{ flex: 1 }}
          facing={facing}
          onCameraReady={() => setIsCameraReady(true)}
        />
      </View>

      <View className="p-6 bg-gray-800 mb-40">
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-2">
            Face Analysis
          </Text>
          <Text className="text-gray-300">
            Position your face in the frame and tap analyze to get AI feedback
            on your skin health.
          </Text>
        </View>

        <View className="flex-row justify-between mb-4">
          <TouchableOpacity
            className="bg-blue-600 px-6 py-3 rounded-lg"
            onPress={toggleCameraFacing}
          >
            <Text className="text-white font-bold">Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-green-600 px-6 py-3 rounded-lg"
            onPress={analyzeFace}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white font-bold">Analyze Face</Text>
            )}
          </TouchableOpacity>
        </View>

        {isAnalyzing && (
          <View className="mt-4">
            <Text className="text-white text-center">
              Analyzing your face... Please hold still.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
