import { ActivityIndicator, View, StyleSheet } from "react-native"

export function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator color='#7C3AED'></ActivityIndicator>
        </View>
    )

}

const styles = StyleSheet.create ({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09090A'
    }
})