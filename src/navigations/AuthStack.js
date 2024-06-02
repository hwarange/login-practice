import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Gender, Age, Allergy, Prefer, FamilyType } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: theme.background },
                headerTintColor: theme.headerTintColor,
            }}
        >
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
            <Stack.Screen name='FamilyType' component={FamilyType} options={{ headerShown: false }}/>
            <Stack.Screen name="Gender" component={Gender} options={{ headerShown: false }}/>
            <Stack.Screen name="Age" component={Age} options={{ headerShown: false }}/>
            <Stack.Screen name="Allergy" component={Allergy} options={{ headerShown: false }}/>
            <Stack.Screen name="Prefer" component={Prefer} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
