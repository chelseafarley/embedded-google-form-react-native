import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

// npx expo install react-native-webview

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://forms.gle/y5SA6ZmzpA8wdsq16" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 64,
  },
});
