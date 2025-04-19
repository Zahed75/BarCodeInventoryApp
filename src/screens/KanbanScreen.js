import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import KanbanBoard from '../components/KanbanBoard';
import { getAllProducts, getAllCategories } from '../services/api';

const KanbanScreen = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [productsRes, categoriesRes] = await Promise.all([
                getAllProducts(),
                getAllCategories(),
            ]);
            console.log('KanbanScreen.js: Fetched products:', productsRes.data);
            console.log('KanbanScreen.js: Fetched categories:', categoriesRes.data);
            setProducts(productsRes.data);
            setCategories(categoriesRes.data);
        } catch (error) {
            console.error('KanbanScreen.js: Error fetching data:', error);
            Alert.alert('Error', 'Failed to load data');
        }
    };

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
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
});

export default KanbanScreen;
