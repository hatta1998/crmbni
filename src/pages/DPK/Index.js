import React from 'react'
import { Text, StyleSheet, View ,TouchableOpacity, Image,ScrollView,Button} from 'react-native'
import {COLORS, FONTS, SIZES, icons} from "../../../constants"
import Tanggal from './Tanggal'
import Grafik from "./Grafik";
import CardList from "./CardList";

const DPK = () => {

    const [viewMode,setViewMode] = React.useState("list");
   

function renderCategoryHeaderSection(){
  return(
      <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginBottom:10}}>
          {/* TITLE */}
          <View>
              <Text style={{...FONTS.h3, color: COLORS.primary }}>Jenis</Text>
              <Text style={{...FONTS.h5, color: COLORS.gray }}>dalam M</Text>
          </View>
          {/* BUTTON */}
          <View style={{flexDirection:'row'}}>

              <TouchableOpacity
                  onPress={()=> setViewMode("chart")}
                  style={{
                      alignItems:'center',
                      justifyContent:'center',
                      height:50,
                      width:50,
                      backgroundColor: viewMode == "chart"? COLORS.secondary : null,
                      borderRadius:25
                  }}>
                  <Image 
                  source={icons.chart} 
                  resizeMode="contain"
                  style={{ 
                      width:20,
                      height:20, 
                      tintColor:viewMode == "chart"? COLORS.white : COLORS.darkgray }} 
                  />
              </TouchableOpacity>

              <TouchableOpacity
              onPress={()=> setViewMode("list")}
              style={{
                  alignItems:'center',
                  justifyContent:'center',
                  height:50,
                  width:50,
                  backgroundColor:viewMode == "list"? COLORS.secondary : null,
                  borderRadius:25
              }}>
                  <Image 
                  source={icons.menu} 
                  resizeMode="contain"
                  style={{ 
                      width:20,
                      height:20,
                      tintColor:viewMode == "list"? COLORS.white : COLORS.darkgray


                  }} 
                  />
              </TouchableOpacity>
              
          </View>
      </View>
  )
}



  return (
    <View style={{paddingHorizontal:SIZES.padding,flex:1,backgroundColor:COLORS.lightGray2}}>
      <Tanggal/>
      {renderCategoryHeaderSection()}
      
        <ScrollView style={{flex: 1}}>
          {
              viewMode=='list'&&
              <View>
                  <CardList/>
              </View>
          }
          {
              viewMode=='chart'&&
              <View>
                  <Grafik/>
              </View>
          }
        </ScrollView>
    </View>
  )
}

export default DPK

const styles = StyleSheet.create({

  card:{
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-between',
      margin:5,
      paddingVertical:SIZES.radius,
      paddingHorizontal:SIZES.padding,
      borderRadius:5,
      backgroundColor: COLORS.white ,
      shadowColor: "#000",
      shadowOffset: {
          width: 2,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,      
  },
 
})