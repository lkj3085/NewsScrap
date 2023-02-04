import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsTabNavigation } from "./NewsTabNavigation";
import { NewsDetailScreen } from "../screen/NewsDetailScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewsTab" component={NewsTabNavigation} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
};
