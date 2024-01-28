import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { CurrencyDollarIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export const FoodCard = ({ id, imgUrl, title, rating, description, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow pt-4"
      onPress={() => {
        navigation.navigate("FoodCardFull", {
          id,
          imgUrl,
          title,
          rating,
          description,
          price,
        });
      }}
    >
      <Image className="w-60 h-40 rounded-xl" source={{ uri: imgUrl }} />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 text-black">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={20} color="black" />
          <Text className="font-bold text-xl">{rating}</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <CurrencyDollarIcon size={30} color="black" />
          <Text className="text-gray-600 text-l">{price}$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
