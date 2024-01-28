import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, addToCart } from "../redux/cartSlice";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";

export const FoodCardFull = () => {
  const navigation = useNavigation();
  const {
    params: { id, imgUrl, title, rating, description, price },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  // --------------REDUX----------------
  const dispatch = useDispatch();
  const items = useSelector(selectCart);
  const addItemToCart = () => {
    dispatch(addToCart({ id, imgUrl, title, rating, description, price }));
  };

  return (
    <ScrollView className="bg-white pt-10">
      <View className="relative bg-white-300 ">
        <Image
          className="w-full h-60 p-4 bg-gray-300"
          source={{ uri: imgUrl }}
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-8 left-5 rounded-full p-1 bg-gray-200"
        >
          <ArrowLeftIcon size={30} color="#8ee359" />
        </TouchableOpacity>
        <Text className="font-bold text-3xl px-10 pt-4">{title}</Text>
        <View className="flex-row items-center space-x-1 px-10 pt-5">
          <StarIcon size={20} color="#8ee359" />
          <Text className="font-bold text-xl text-gray-600">{rating}</Text>
          <CurrencyDollarIcon size={30} color="#8ee359" />
          <Text className="text-black text-xl font-bold">{price}$</Text>
        </View>
        <Text className="text-gray-400 mb-3 px-4">{description}</Text>
        <TouchableOpacity className="flex-row p-3 items-center space-x-2 border-y border-gray-100">
          <QuestionMarkCircleIcon size={20} color="black" opacity={0.7} />
          <Text className="flex-1 text-md font-bold">
            Есть аллергия на отдельные ингридиенты?
          </Text>
          <ChevronRightIcon color="#8ee359" opacity={0.7} />
        </TouchableOpacity>

        {/* {ADD COUNT DELETE} */}
        <View className="flex-row items-center p-5 space-x-3">
          <TouchableOpacity>
            <MinusCircleIcon size={50} color="#8ee359" />
          </TouchableOpacity>
          <Text className="font-bold text-2xl">0</Text>
          <TouchableOpacity onPress={addItemToCart}>
            <PlusCircleIcon size={50} color="#8ee359" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
