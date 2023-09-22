
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        marginVertical: 28,
        gap: 24
    },
    statusTasksSection: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statusTasks: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    statusTasksQuantity: {
        color: '#fff',
        backgroundColor: '#262626',
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold"
    },
    textBlue: {
        color: '#4ea8de',
        fontWeight: "bold"
    },
    textPurple: {
        color: '#8284fa',
        fontWeight: "bold"
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#333333'
    }
})