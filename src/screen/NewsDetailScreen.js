import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { clipNewsItem } from "../action/news";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";

export const NewsDetailScreen = () => {
  const navigation = useNavigation();

  const routes = useRoute();

  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressFavorite = useCallback(() => {
    dispatch(clipNewsItem(routes.params.newsItem));
  }, []);

  const isClipped =
    useSelector((state) =>
      state.news.favoriteNews.filter(
        (item) => item.link === routes.params.newsItem.link
      )
    ).length > 0;

  // console.log(routes.params);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName="arrow-back" onPress={onPress} />
          <Spacer space={12} horizontal />
          <View style={{ maxWidth: 200 }}>
            <Header.Title title="뉴스 상세"></Header.Title>
          </View>
        </Header.Group>
        <Header.Icon
          iconName={isClipped ? "heart" : "heart-outline"}
          onPress={onPressFavorite}
        />
      </Header>

      <WebView
        style={{ flex: 1 }}
        source={{ uri: routes.params.newsItem.link }}
      />
    </View>
  );
};
