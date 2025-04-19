import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native'; // All required components
import { SafeAreaView } from 'react-native-safe-area-context';
import KanbanBoard from '../components/KanbanBoard';
import { getAllProducts, getAllCategories } from '../services/api';

const KanbanScreen = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [productsRes, categoriesRes] = await Promise.all([
                getAllProducts(),
                getAllCategories(),
            ]);

            // Ensure data is always an array
            setProducts(productsRes.data?.data || []);
            setCategories(categoriesRes.data?.data || []);

        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KanbanBoard
                products={products}
                categories={categories}
                onUpdate={fetchData}
            />
        </SafeAreaView>
    );
};

export default KanbanScreen;
