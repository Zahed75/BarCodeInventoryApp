import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.barcode}>Barcode: {product.barcode}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F4F6',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
    },
    barcode: {
        fontSize: 14,
        color: '#4B5563',
    },
});

export default ProductCard;
