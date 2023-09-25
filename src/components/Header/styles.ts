import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 220,
        width: '100%',
        backgroundColor: '#0d0d0d',
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        objectFit: "cover",
    },
    form: {
        width: '100%',
        flexDirection: "row",
        paddingHorizontal: 28,
        marginTop: -28,
        gap: 8
    },
    inputFocus: {
        backgroundColor: '#333333',
        height: 56,
        borderRadius: 5,
        color: '#ffffff',
        padding: 16,
        flex: 1,
        borderColor: '#1E6F9F',
        borderWidth: 1
    },
    inputNotFocus: {
        backgroundColor: '#333333',
        height: 56,
        borderRadius: 5,
        color: '#ffffff',
        padding: 16,
        flex: 1,
        borderColor: '#0d0d0d',
        borderWidth: 1
    },
    buttonAdd: {
        width: 56,
        height: 56,
        backgroundColor: "#1E6F9F",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})