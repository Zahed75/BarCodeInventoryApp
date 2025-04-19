import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; // Ensure these are imported

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{product?.name || 'Unnamed Product'}</Text>
            <Text style={styles.barcode}>Barcode: {product?.barcode || 'N/A'}</Text>
        </View>
    );
};
