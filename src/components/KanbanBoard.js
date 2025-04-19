import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
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

            // Ensure we have valid array data
            setProducts(productsRes.data?.data || []);
            setCategories(categoriesRes.data?.data || []);

        } catch (error) {
            console.error('KanbanScreen.js: Error fetching data:', error);
            Alert.alert('Error', 'Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <KanbanBoard
                    products={Array.isArray(products) ? products : []}
                    categories={Array.isArray(categories) ? categories : []}
                    onUpdate={fetchData}
                />
            )}
        </SafeAreaView>
    );
};

export default KanbanScreen;
