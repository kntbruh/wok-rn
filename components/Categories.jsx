import { ScrollView, Text } from "react-native";
import React from "react";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
  const categories = ["Все", "Мини", "Рис", "Рыба"];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 16 }}
    >
      {categories.map((category, index) => {
        return (
          <CategoryCard
            key={index}
            imgUrl="https://photobooth.cdn.sports.ru/preset/message/4/c3/53e5801b3471a9b625dfb98e30bc1.jpeg"
            title={category}
          />
        );
      })}
    </ScrollView>
  );
};
