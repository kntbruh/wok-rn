import { HomeScreen, Fo } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FoodCardFull } from "./components/FoodCardFull";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FoodCardFull" component={FoodCardFull} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
