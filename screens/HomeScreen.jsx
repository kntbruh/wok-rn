import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  UserCircleIcon,
  FunnelIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/outline";
import { Categories } from "../components/Categories";
import { FeaturedRow } from "../components/FeaturedRow";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const fetchWok = () => {
    ax;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-3">
        <Image
          source={{
            uri: "https://photobooth.cdn.sports.ru/preset/message/a/1d/d5469df9747ebbb2a05cd52f52fe1.jpeg",
          }}
          className="h-8 w-8 bg-gray-300 p-4 rounded-full px-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-500 text-xs">
            Лучший wok только у нас, заказывай
          </Text>
          <Text className="font-bold text-m">
            Доставим на адрес: <ChevronDownIcon size={20} color="#8ee359" />
          </Text>
        </View>
        <UserCircleIcon size={35} color="black" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-3">
        <View className="flex-row space-x-2 flex-1  bg-gray-200 p-3">
          <MagnifyingGlassCircleIcon size={30} color="gray" />
          <TextInput placeholder="find wok" keyboardType="default" />
        </View>
        <FunnelIcon size={30} color="#8ee359" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* CATEGORIES */}
        <Categories />
        {/* FEATURED CATEGORY */}
        <FeaturedRow
          id="1"
          title="featured"
          description="desc....blabla"
          featuredCategory="Buy this"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
