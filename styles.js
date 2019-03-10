import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    calculation:{
        flex:2,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#DCDCDC",
    },

    calculationText:{
        fontSize: 35,
        color: 'black'
    },

    result:{
        flex:1,
        backgroundColor: "#DCDCDC",
        justifyContent: "center",
        alignItems: "flex-end"
    },

    resultText:{
        fontWeight: "bold",
        fontSize: 25,
        color: "black"
    },

    utilities:{
        flex: 0.7,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#696969"
    },

    utilityText:{
        color: "white",
        fontSize: 18
    },

    buttons:{
        flex:6,
        flexDirection: "row"
    },

    numbers:{
        flex:3,
        backgroundColor: "#434343"
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

    buttText:{
        fontSize: 30,
        color: "white"
    },

    operators:{
        flex:1,
        justifyContent: "space-around",
        backgroundColor: "#808080",
        alignItems: "stretch"
    }

});

export default styles;