import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ScanningScreen() {
    // const navigation = useNavigation();
    // const route = useRoute();
    // const { scanCount, timeFrame } = route.params;
    //
    // const [scannedDevices, setScannedDevices] = useState([]);
    // const [scanStatus, setScanStatus] = useState('Not Started');
    // const [scanTimer, setScanTimer] = useState(null);
    //
    // // Simulate scanning function
    // const startScan = async () => {
    //     setScanStatus('Scanning...');
    //     let devices = [];
    //     const totalScans = parseInt(scanCount);
    //     const scanDuration = parseInt(timeFrame);
    //
    //     // Simulate the BLE scanning process
    //     for (let i = 0; i < totalScans; i++) {
    //         if (i === totalScans) {
    //             setScanStatus('Scan Completed');
    //         }
    //         devices.push({ id: i + 1, name: `Device ${i + 1}` });
    //         setScannedDevices(devices);
    //
    //         // Simulate delay for each scan
    //         await new Promise((resolve) => setTimeout(resolve, scanDuration));
    //     }
    // };
    //
    // // Handle start scanning
    // useEffect(() => {
    //     if (scanCount && timeFrame) {
    //         startScan();
    //     }
    // }, [scanCount, timeFrame]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scanning Screen</Text>

            {/*<Text style={styles.subtitle}>Scan Status: {scanStatus}</Text>*/}

            {/*<View style={styles.card}>*/}
            {/*    <Text style={styles.cardTitle}>Scanned Devices</Text>*/}
            {/*    {scannedDevices.length > 0 ? (*/}
            {/*        scannedDevices.map((device, index) => (*/}
            {/*            <Text key={index}>{device.name}</Text>*/}
            {/*        ))*/}
            {/*    ) : (*/}
            {/*        <Text>No devices found</Text>*/}
            {/*    )}*/}
            {/*</View>*/}

            {/*<Button title="Stop Scanning" onPress={() => setScanStatus('Stopped')} />*/}

            {/*<Button title="Back to Home" onPress={() => navigation.goBack()} />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    card: {
        marginTop: 20,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        width: '80%',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
});
