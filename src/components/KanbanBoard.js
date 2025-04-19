import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';
import ProductCard from './ProductCard';
import { updateProductCategory } from '../services/api';

const KanbanBoard = ({ products, categories, onUpdate }) => {
    const handleDragDrop = async (productId, newCategory) => {
        try {
            await updateProductCategory(productId, newCategory);
            console.log('KanbanBoard.js: Updated product category:', productId, newCategory);
            onUpdate();
        } catch (error) {
            console.error('KanbanBoard.js: Error updating category:', error);
        }
    };

    return (
        <DraxProvider>
            <ScrollView horizontal contentContainerStyle={{ padding: 10 }}>
                {['Uncategorized', ...categories.map((cat) => cat.name)].map(
                    (category) => (
                        <DraxView
                            key={category}
                            style={[styles.column, { pointerEvents: 'auto' }]}
                            receivingStyle={styles.receiving}
                            onReceiveDragDrop={({ dragged }) =>
                                handleDragDrop(dragged.payload.id, category)
                            }
                            payload={{ category }}
                        >
                            <Text style={styles.category}>{category}</Text>
                            <DraxList
                                data={
                                    products?.filter((product) => product.category === category) || []
                                }
                                renderItemContent={({ item }) => <ProductCard product={item} />}
                                keyExtractor={(item) => item._id}
                                style={{ flexGrow: 0, pointerEvents: 'auto' }}
                            />
                        </DraxView>
                    )
                )}
            </ScrollView>
        </DraxProvider>
    );
};

const styles = StyleSheet.create({
    column: {
        width: 256,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginRight: 12,
        padding: 12,
    },
    receiving: {
        borderWidth: 2,
        borderColor: '#3B82F6',
    },
    category: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
});

export default KanbanBoard;
