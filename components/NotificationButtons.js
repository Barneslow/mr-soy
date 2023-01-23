import { StyleSheet, View } from "react-native";
import Animated, { FadeInRight, FadeInLeft } from "react-native-reanimated";
import IconButtonContainer from "./buttons/IconButtonContainer";
import * as Notifications from "expo-notifications";
import useNotifications from "../hooks/useNotifications";

const NotificationButtons = () => {
  const { registerForPushNotificationsAsync } = useNotifications();

  async function scheduleLocalNotifications() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  }

  async function scheduleRepeatingLocalNotifications() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Schedule notification to repeat 📬",
        body: "Repeating reminders go here",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2, repeats: true },
    });
  }

  async function cancelAllRepeatingNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  async function savePushTokenHandler() {
    registerForPushNotificationsAsync();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Animated.View entering={FadeInRight.duration(500)}>
        <IconButtonContainer
          name="notifications"
          style={[styles.button, { backgroundColor: "#189AD3" }]}
          text="Local Notifications"
          onPress={scheduleLocalNotifications}
        />
      </Animated.View>

      <Animated.View entering={FadeInRight.duration(500).delay(1000)}>
        <IconButtonContainer
          name="notifications"
          style={[styles.button, { backgroundColor: "#00CC00" }]}
          text="Schedule Notifications"
          onPress={scheduleRepeatingLocalNotifications}
        />
      </Animated.View>
      <Animated.View entering={FadeInLeft.duration(500).delay(1500)}>
        <IconButtonContainer
          name="notifications-off"
          style={[styles.button, { backgroundColor: "red" }]}
          text="Stop All Notifications"
          onPress={cancelAllRepeatingNotifications}
        />
      </Animated.View>
      <Animated.View entering={FadeInRight.duration(500).delay(2000)}>
        <IconButtonContainer
          name="save"
          style={[styles.button, { backgroundColor: "#f7e22b" }]}
          text="Save PushToken"
          onPress={savePushTokenHandler}
        />
      </Animated.View>
    </View>
  );
};

export default NotificationButtons;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    borderWidth: 0.3,
    borderColor: "rgba(0, 0, 0, .4)",
  },
});
