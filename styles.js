import { StyleSheet } from "react-native"
import { bold } from "ansi-colors";

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    calculation:{
        flex:2,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "red",
    },

    calculationText:{
        fontSize: 30,
        color: 'white'
    },

    result:{
        flex:1,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "flex-end"
    },

    resultText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "white"
    },

    buttons:{
        flex:6,
        flexDirection: "row"
    },

    numbers:{
        flex:3,
        backgroundColor: "white"
    },

    row:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    butt:{
        flex:1,
        alignItems: "center",
        alignSelf: "stretch",
        justifyContent: "center"
    },

    operators:{
        flex:1,
        justifyContent: "space-around",
        backgroundColor: "yellow",
        alignItems: "stretch"
    }





});

export default styles;