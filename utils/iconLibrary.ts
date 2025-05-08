import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const getIconComponent = (iconLibrary: string) => {
  switch (iconLibrary) {
    case "fontawesome":
      return FontAwesome;
    case "ionicons":
      return Ionicons;
    case "feather":
      return Feather;
    case "material-community":
      return MaterialCommunityIcons;
    case "material":
    default:
      return MaterialIcons;
  }
};
