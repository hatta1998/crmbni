import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {COLORS, FONTS, SIZES, icons} from "../../../constants"
import moment from 'moment'
import 'moment/locale/id'

export default class Tanggal extends Component {

    constructor(){
        super()
        this.state={
          //untuk DATE
          isVisible:false,
          chosenDate:'',
        }}

    handlePicker=(datetime)=>{
        this.setState({
            isVisible:false,
            chosenDate:moment(datetime).format('D MMMM YYYY')
        })
        }
    
        showPicker=()=>{
        this.setState({
            isVisible:true
        })
        }
    
        hidePicker=()=>{
        this.setState({
            isVisible:false
            
        })
        }

    render() {
        const state = this.state;
    return (
      <View >
      <TouchableOpacity style={styles.date} onPress={this.showPicker}>
      <TouchableOpacity
                  onPress={this.showPicker}
                  style={{
                      alignItems:'center',
                      justifyContent:'center',
                      height:40,
                      width:40,
                      backgroundColor:  COLORS.primary,
                      borderRadius:25
                  }}>
                  <Image 
                  source={icons.calendar} 
                  resizeMode="contain"
                  style={{ 
                      width:20,
                      height:20, 
                      tintColor: COLORS.white }} 
                  />
          </TouchableOpacity>
          <View style={{marginHorizontal:15}}>
          <Text>Tanggal:</Text>
          <Text style={styles.dateText}>{this.state.chosenDate}</Text>
              <DateTimePickerModal
              isVisible={this.state.isVisible}
              mode="date"
              maximumDate = {new Date()}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
              />
            </View>

            
      </TouchableOpacity>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    date:{  
            backgroundColor:"white",
            padding:10,
            borderRadius:100,
            flexDirection:'row',
            alignItems:"center", 
            marginVertical:20,
            borderRadius:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,  
          },
          dateText:{
            fontWeight:'bold',
          ...FONTS.h3,
          color: COLORS.primary
      
          },

    })
