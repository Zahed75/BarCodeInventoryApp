import React from 'react';
import { ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native'; // Added ActivityIndicator
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import ProductCard from './ProductCard';
import { updateProductCategory } from '../services/api';

const KanbanBoard = ({ products = [], categories = [], onUpdate, loading }) => {
    const handleDragDrop = async (productId, newCategory) => {
        try {
            await updateProductCategory(productId, newCategory);
            onUpdate();
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text>Loading board...</Text>
            </View>
        );
    }

    return (
        <DraxProvider>
            <ScrollView horizontal contentContainerStyle={styles.container}>
                {['Uncategorized', ...categories.map(cat => cat.name)].map(category => (
                    <DraxView
                        key={category}
                        style={styles.column}
                        receivingStyle={styles.receiving}
                        onReceiveDragDrop={({ dragged }) =>
                            handleDragDrop(dragged.payload.id, category)
                        }
                        payload={{ category }}
                    >
                        <Text style={styles.categoryTitle}>{category}</Text>
                        <DraxList
                            data={products.filter(p => p.category === category)}
                            renderItemContent={({ item }) => <ProductCard product={item} />}
                            keyExtractor={item => item._id}
                        />
                    </DraxView>
                ))}
            </ScrollView>
        </DraxProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    column: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 12,
        padding: 12
    },
    receiving: {
        borderWidth: 2,
        borderColor: '#3b82f6'
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default KanbanBoard;
