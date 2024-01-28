import { View, Text, ScrollView, Alert, FlatList } from "react-native";
import React from "react";
import { ArrowRightCircleIcon } from "react-native-heroicons/outline";
import { FoodCard } from "./FoodCard";

import axios from "axios";

export const FeaturedRow = ({ id, title, rating, category, price }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://655251e85c69a7790329e2f4.mockapi.io/wok-data")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка!", "Error!");
      });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">Wok React</Text>
        <ArrowRightCircleIcon size={30} color="#8ee359" />
      </View>
      <Text className="text-xs text-gray-500 px-4">Choose your wok here:</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={true}
        className="pt-4 pb-3"
      >
        {/* CARDS */}

        {items?.map((item) => {
          return (
            <FoodCard
              key={item.id}
              title={item.title}
              rating={item.rating}
              description={item.description}
              price={item.price}
              imgUrl={item.imageUrl}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
