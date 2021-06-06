import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

function ActionButton ( {navigation })  {
    return (
        <View>
        <TextInput placeholder={"Email"} style={styles.textInput}/>
        <TextInput placeholder={"Password"} secureTextEntry={true} style={styles.textInput}/>
        <Text style={styles.textLupa}>Lupa Password?</Text>
        <TouchableOpacity style={styles.button}onPress={() => this.props.navigation.navigate(Home)}>
            <Text style={styles.textButton}>Masuk</Text>
        </TouchableOpacity>
    </View>
    );
}

const Login = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.text}>LOGIN</Text>
                <ActionButton />
            </View>    
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
        justifyContent : 'center',
    },

    container : {
        alignItems : 'center',
    },

    button : {
        backgroundColor : '#3498db', 
        borderRadius : 10, 
        marginTop : 10,
        paddingVertical : 8,
        paddingHorizontal : 30
    },

    text : {
        marginBottom: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },

    textInput : {
        width : 300,
        backgroundColor : '#e0e0de',
        borderRadius : 15,
        paddingHorizontal : 16,
        marginVertical : 8,
    },

    textButton : {
        color: 'white', 
        fontSize: 12, 
        padding:10,
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        textAlign: 'center'
    },
    textLupa:{
        color:'blue',
        fontSize: 12, 
        textAlign: 'center'
    }
})