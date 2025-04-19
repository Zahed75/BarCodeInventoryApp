import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        console.log('HomeScreen.js: Component mounted successfully');
    }, []);

    try {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to Inventory App</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log('HomeScreen.js: Navigating to Scanner');
                            navigation.navigate('Scanner');
                        }}
                    >
                        <Text style={styles.buttonText}>Scan Barcode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { marginBottom: 0 }]}
                        onPress={() => {
                            console.log('HomeScreen.js: Navigating to Kanban');
                            navigation.navigate('Kanban');
                        }}
                    >
                        <Text style={styles.buttonText}>View Kanban Board</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    } catch (error) {
        console.error('HomeScreen.js: Error rendering HomeScreen:', error);
        return (
            <SafeAreaView>
                <Text>Error in HomeScreen: {error.message}</Text>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#EF4444',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default HomeScreen;
