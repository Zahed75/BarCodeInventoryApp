// src/components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => (
    <View style={styles.container}>
        <Text style={styles.name}>{product?.name || 'Unnamed Product'}</Text>
        <Text style={styles.barcode}>Barcode: {product?.barcode || 'N/A'}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { /* ... existing styles ... */ },
    name: { /* ... */ },
    barcode: { /* ... */ }
});

// Must use default export
export default ProductCard;
