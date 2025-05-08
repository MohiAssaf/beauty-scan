export const getIconName = (name: string) => {
  switch (name.toLowerCase()) {
    case "index":
      return "home";
    case "analysis":
      return "camera";
    case "profile":
      return "person";
    default:
      return "help-circle";
  }
};
