import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen'; // Ensure this path is correct
import KanbanScreen from '../screens/KanbanScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Scanner"
                    component={ScannerScreen}
                    options={{ title: 'Scan Barcode' }}
                />
                <Stack.Screen name="Kanban" component={KanbanScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
