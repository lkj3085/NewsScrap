import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NewsListScreen } from "../screen/NewsListScreen";
import { FavoriteNewsListScreen } from "../screen/FavoriteNewsListScreen";
import { TabIcon } from "../components/TabIcon";

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          const getIconName = () => {
            if (route.name === "FavoriteNewsList") {
              return "star";
            }
            return "home";
          };
          const iconName = getIconName();
          return <TabIcon iconName={iconName} iconColor={color} />;
        },
      })}>
      <BottomTab.Screen name="NewsList" component={NewsListScreen} />
      <BottomTab.Screen
        name="FavoriteNewsList"
        component={FavoriteNewsListScreen}
      />
    </BottomTab.Navigator>
  );
};
