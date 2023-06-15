//hoja de estilos 
import { StyleSheet } from "react-native";
import { Overlay } from "@rneui/base";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export const styles= StyleSheet.create({
    overlay:{
        height: 100,
        width: 200,
        backgroundColor: "#ffffff",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius:25,
    },
    view:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",

    },
    text:{
        color:"#00a680",
        testTransform:"uppercase",
        marginTop: 10,
    }
});
