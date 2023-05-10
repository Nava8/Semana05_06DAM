import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";
import MyForm from "./Screens/MyForm";
import GalleryPage from "./Screens/GalleryPage";
const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Inicio">
      <HomeStackNavigator.Screen name="Inicio" component={HomeScreen} />
      <HomeStackNavigator.Screen name="LugaresTuristicos" component={StackScreen} />
      <HomeStackNavigator.Screen name="Tabs" component={MyTabs} />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBarShowLabel={false}>
      <Tab.Screen
        name="Formulario"
        component={MyForm}
        options={{
          tabBarLabel: "Formulario",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="form-dropdown" color={color} size={size} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Galería"
        component={GalleryPage}
        options={{
          tabBarLabel: "Galería",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="image-multiple"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
