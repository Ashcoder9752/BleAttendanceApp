import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
// import { BleManager } from 'react-native-ble-plx';
import {Colors, FontWeight, Spacing} from "../styles";

// const manager = new BleManager();

export default function ScanningScreen() {
    const [devices, setDevices] = useState<{ id: string; name: string | null; rssi: number | null }[]>([]);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        // Request location permission on Android
        const requestPermissions = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                );
                if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                    console.warn('Location permission not granted');
                }
            }
        };

        requestPermissions();

        return () => {
            // manager.destroy();
        };
    }, []);

    const startScan = () => {
        setDevices([]);
        setIsScanning(true);

        // manager.startDeviceScan(null, null, (error, device) => {
        //     if (error) {
        //         console.warn('Scan error:', error);
        //         setIsScanning(false);
        //         return;
        //     }
        //
        //     if (device && device.id) {
        //         setDevices((prevDevices) => {
        //             // Add device only if it's new
        //             const exists = prevDevices.some((d) => d.id === device.id);
        //             if (!exists) {
        //                 return [...prevDevices, { id: device.id, name: device.name, rssi: device.rssi }];
        //             }
        //             return prevDevices;
        //         });
        //     }
        // });

        // Stop scanning after 10 seconds automatically
        setTimeout(() => {
            // manager.stopDeviceScan();
            setIsScanning(false);
        }, 10000);
    };

    const renderItem = ({ item }: { item: { id: string; name: string | null; rssi: number | null } }) => (
        <View style={styles.deviceItem}>
            <Text style={styles.deviceText}>
                {item.name || 'Unnamed'} ({item.id})
            </Text>
            <Text style={styles.deviceText}>RSSI: {item.rssi}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, isScanning && { backgroundColor: 'gray' }]}
                onPress={startScan}
                disabled={isScanning}
            >
                <Text style={styles.buttonText}>
                    {isScanning ? 'Scanning...' : 'Start Scan'}
                </Text>
            </TouchableOpacity>

            <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Spacing.xxxl,
        paddingHorizontal: Spacing.md,
        backgroundColor: Colors.background,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: Spacing.md,
        borderRadius: Spacing.sm,
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    buttonText: {
        color: Colors.textPrimary,
        fontSize: 16,
        fontWeight: FontWeight.Bold,
    },
    list: {
        paddingBottom: Spacing.xxxl,
    },
    deviceItem: {
        padding: Spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    deviceText: {
        fontSize: 14,
    },
});