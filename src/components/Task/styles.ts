import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 62,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 6,
        paddingHorizontal: 16,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 16
    },
    textCreate: {
        color: "#f2f2f2",
        fontSize: 16
    },
    textDone: {
        color: '#808080',
        textDecorationLine: 'line-through',
        fontSize: 16
    },
    trashIcon: {
        marginLeft: 'auto'
    }
})