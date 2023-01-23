import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Notifications from "expo-notifications";
import useNotifications from "./hooks/useNotifications";
import { useEffect } from "react";
import NotificationButtons from "./components/NotificationButtons";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const { handleNotificationResponse } = useNotifications();

  useEffect(() => {
    const responseListnener = Notifications.addNotificationReceivedListener(
      handleNotificationResponse
    );

    return () => {
      if (responseListnener)
        Notifications.removeNotificationSubscription(responseListnener);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <LinearGradient colors={["#F6F0EA", "#F1DFD1"]} style={styles.background}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
          }}
          imageStyle={{ opacity: 0.4 }}
          style={{ width: "100%", flex: 1 }}
        >
          <NotificationButtons />
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    flex: 1,
    width: "100%",
  },
});
