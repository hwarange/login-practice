import React, { useState, useEffect } from "react";
import { StatusBar, Image } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Navigation from "./navigations";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginProvider } from "./contexts/LoginContext";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const cacheImages = (images) => {
    return images.map((image) => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
};

const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
};

const App = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                const imageAssets = cacheImages([require('../assets/splash.png')]);
                const fontAssets = cacheFonts([]);

                await Promise.all([...imageAssets, ...fontAssets]);

                // Check if token is stored
                const token = await AsyncStorage.getItem('accessToken');
                if (token) {
                    setIsLoggedIn(true);
                }
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
                SplashScreen.hideAsync(); // Hide the splash screen once the assets are loaded
            }
        };

        loadAssets();
    }, []);

    if (!isReady) {
        return null; // Render nothing while assets are loading
    }

    return (
        <ThemeProvider theme={theme}>
            <LoginProvider>
                <StatusBar barStyle={"dark-content"} />
                <Navigation />
            </LoginProvider>
        </ThemeProvider>
    );
};

export default App;
