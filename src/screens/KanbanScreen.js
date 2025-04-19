import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
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

            // Make sure to handle both the direct array and { data: array } responses
            const [productsResponse, categoriesResponse] = await Promise.all([
                getAllProducts(),
                getAllCategories(),
            ]);

            // Safely extract array data from different response formats
            const productsData = Array.isArray(productsResponse.data)
                ? productsResponse.data
                : productsResponse.data?.data || [];

            const categoriesData = Array.isArray(categoriesResponse.data)
                ? categoriesResponse.data
                : categoriesResponse.data?.data || [];

            setProducts(productsData);
            setCategories(categoriesData);

        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text>Loading data...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <KanbanBoard
                products={products}
                categories={categories}
                onUpdate={fetchData}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default KanbanScreen;
