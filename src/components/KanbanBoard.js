import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import ProductCard from './ProductCard'; // Verify this path is correct

const KanbanBoard = ({ products = [], categories = [], onUpdate }) => {
    const safeCategories = Array.isArray(categories) ? categories : [];

    const handleDragDrop = async (productId, newCategory) => {
        try {
            await updateProductCategory(productId, newCategory);
            onUpdate?.();
        } catch (error) {
            console.error('Drag failed:', error);
        }
    };

    return (
        <DraxProvider>
            <ScrollView horizontal contentContainerStyle={styles.container}>
                {['Uncategorized', ...safeCategories.map(c => c?.name || '')].map((category, index) => (
                    <DraxView
                        key={`${category}-${index}`}
                        style={styles.column}
                        receivingStyle={styles.receiving}
                        onReceiveDragDrop={({ dragged }) =>
                            handleDragDrop(dragged.payload.id, category)
                        }
                        payload={{ category }}
                    >
                        <Text style={styles.categoryTitle}>{category}</Text>
                        <DraxList
                            data={products.filter(p => p?.category === category) || []}
                            renderItemContent={({ item }) => (
                                <ProductCard product={item} />
                            )}
                            keyExtractor={(item) => item._id || Math.random().toString()}
                        />
                    </DraxView>
                ))}
            </ScrollView>
        </DraxProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    column: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 10,
        padding: 10,
    },
    receiving: {
        borderWidth: 2,
        borderColor: '#3b82f6',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default KanbanBoard;
