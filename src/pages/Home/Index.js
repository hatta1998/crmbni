import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity, Image} from 'react-native'
import {COLORS, FONTS, SIZES, icons} from "../../../constants"

export default class Home extends Component {
    
    
    
    
    render() {
        return (
            <View style={styles.bg}>

                <Text style={styles.greeting}>Hallo, Sugiono</Text>

                <View style={styles.menu}>
                    {/* <View>
                    <Text style={{...FONTS.h3, color: COLORS.primary }}>Mochamad Yuristirawan</Text>
                        <Text style={{...FONTS.h5, color: COLORS.darkgray }}>28 FEB 2021</Text>
                    </View>
    
                    <View>
                        <Text style={{...FONTS.h5, color: COLORS.darkgray }}>Score KPI</Text>
                        <Text style={{...FONTS.h2, color: COLORS.primary, alignSelf:'flex-end' }}>3.55</Text>
                    </View> */}

                   <View>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={()=> this.props.navigation.navigate('KPI')}
                        >
                        <Image 
                        source={icons.education} 
                        resizeMode="contain"
                        style={{ 
                            width:30,
                            height:30, 
                            tintColor: COLORS.primary }} 
                        />
                    </TouchableOpacity>
                    <Text style={styles.menuText}>KPI</Text>
                    </View>

                    
                    <View>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={()=> this.props.navigation.navigate('DPK')}
                        >
                        <Image 
                        source={icons.chart} 
                        resizeMode="contain"
                        style={{ 
                            width:30,
                            height:30, 
                            tintColor: COLORS.primary }} 
                        />
                    </TouchableOpacity>
                    <Text style={{...FONTS.h4, color: COLORS.black, textAlign:'center',marginTop:5}}>DPK</Text>
                    </View>
                    
                </View>
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        flex:1    ,
        marginHorizontal:20,
    },
    greeting:{
        fontWeight:'bold',
        ...FONTS.h2,
        marginTop:20,
        color: COLORS.primary
    },
    menu:{
        flexDirection:'row',
        justifyContent: 'space-around', 
        alignItems:"center", 
        padding: SIZES.paddingsmall,
        marginVertical:20,
        backgroundColor:'white',
        borderRadius:10, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
      },
    menuButton:{
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:50,
        borderRadius:25,
       borderWidth:1, borderColor:'#EFEFEF', borderRadius:18,
    },
    menuText:{
        ...FONTS.h4, 
        color: COLORS.black, 
        textAlign:'center',
        marginTop:5
    },
  


})
