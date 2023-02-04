import { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../action/news";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { SingleLineInput } from "../components/SingleLineInput";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components/Button";

export const NewsListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [query, setQuery] = useState("");

  const onSubmitEditing = useCallback(() => {
    if (query === "") {
      return;
    }
    dispatch(getNewsList(query));
  }, [query]);

  const newsList = useSelector((state) => state.news.newsList);

  const onPressListItem = useCallback((newsItem) => {
    navigation.navigate("NewsDetail", {
      newsItem,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="뉴스 리스트"></Header.Title>
      </Header>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 24, paddingVertical: 12 }}>
          <SingleLineInput
            value={query}
            onChangeText={setQuery}
            placeholder="검색"
            onSubmitEditing={onSubmitEditing}
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={newsList}
          renderItem={({ item }) => {
            return (
              <Button onPress={() => onPressListItem(item)}>
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
    </View>
  );
};
