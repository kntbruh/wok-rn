import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-3">
      <Image className="w-20 h-20 rounded" source={{ uri: imgUrl }} />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-l">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
