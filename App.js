import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./Screens/Login/Login";

export default function App() {
  return (
    <SafeAreaProvider>
      <LoginScreen />
    </SafeAreaProvider>
  );
}
