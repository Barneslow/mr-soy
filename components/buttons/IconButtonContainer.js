import { Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButtonContainer = ({ name, size, color, onPress, style, text }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [
              style,
              {
                opacity: 0.8,
                transform: [{ scale: 0.98 }],
              },
            ]
          : style
      }
    >
      <Ionicons name={name} size={size || 32} color={color || "white"} />
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          paddingLeft: 5,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default IconButtonContainer;
