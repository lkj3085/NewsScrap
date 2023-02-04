import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clippedTabFocus } from "../action/news";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";

export const FavoriteNewsListScreen = () => {
  const navigation = useNavigation();

  const data = useSelector((state) => state.news.favoriteNews);

  const dispatch = useDispatch();

  const onPressItem = useCallback((newsItem) => {
    navigation.navigate("NewsDetail", { newsItem });
  }, []);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(clippedTabFocus());
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header>
        <Header.Title title="My Favorite"></Header.Title>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => onPressItem(item)}>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                }}>
                <Typography fontSize={24} numberOfLines={1}>
                  {item.title}
                </Typography>
                <Typography fontSize={16} numberOfLines={2} color="grey">
                  {item.description}
                </Typography>
              </View>
            </Button>
          );
        }}
      />
    </View>
  );
};
