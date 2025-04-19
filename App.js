import React, { useEffect } from 'react';
import 'react-native-gesture-handler'; // Must stay first
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { registerRootComponent } from 'expo'; // Add this import
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
    useEffect(() => {
        console.log('App.js: App component mounted successfully');
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AppNavigator />
        </GestureHandlerRootView>
    );
};

// Explicitly register the component
export default registerRootComponent(App);
