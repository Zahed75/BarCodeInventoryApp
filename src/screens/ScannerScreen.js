import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera'; // Updated import
import { addProductByBarcode } from '../services/api';

const ScannerScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        requestPermission(); // Simpler permission handling
    }, []);

    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        try {
            const response = await addProductByBarcode(data);
            Alert.alert('Success', `Added: ${response.data.product.name}`);
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Scan failed');
        }
        setTimeout(() => setScanned(false), 2000);
    };

    if (!permission?.granted) {
        return (
            <View style={styles.container}>
                <Text>Camera permission required</Text>
            </View>
        );
    }

    return (
        <CameraView
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
                barCodeTypes: ['ean13', 'ean8', 'upc-a', 'upc-e', 'qr'] // Supported formats
            }}
            style={StyleSheet.absoluteFill}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ScannerScreen;
