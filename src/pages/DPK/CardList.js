import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity, Image,ScrollView,Button} from 'react-native'
import {COLORS, FONTS, SIZES, icons} from "../../../constants"
import FIREBASE from "../../config/firebase";

export class CardList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          user: {},
        };
      }
    
      componentDidMount() {
        FIREBASE.database()
          .ref('User/dpk')
        //   .orderBy('date')
        //   .equalTo({chosenDate})
          .once('value', (querySnapShot) => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let userItem = {...data};
    
            this.setState({
              user: userItem,
            });
          });
      }
    
      render() {
        const {user} = this.state;
        return (
            <View>
            
            {/* END DPK */}
            <TouchableOpacity style={styles.card}>
                {/* bagian kiri */}
                <View style={{alignSelf: 'flex-end'}}>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}> % ARCHIVE</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>(END DPK)</Text>
                <Text style={{...FONTS.h0, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkArchive} </Text>
                </View>
                {/* bagian kanan */}
                <View style={{alignItems: 'flex-end'}}>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>END DPK</Text>
                <Text style={{...FONTS.h1, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkEnd}</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>GIRO END DPK</Text>
                <Text style={{...FONTS.h2, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkGiroEnd}</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>CASA RATIO</Text>
                <Text style={{...FONTS.h2, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkCasaRatio}</Text>
                </View>
            </TouchableOpacity>

            {/* AVG DPK */}
            <TouchableOpacity style={styles.card}>
                {/* bagian kiri */}
                <View style={{alignSelf: 'flex-end'}}>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}> % ARCHIVE</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>(AVG DPK)</Text>
                <Text style={{...FONTS.h0, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkArchiveAVG}</Text>
                </View>
                {/* bagian kanan */}
                <View style={{alignItems: 'flex-end'}}>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>AVG DPK</Text>
                <Text style={{...FONTS.h1, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkAVG}</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>GIRO END DPK</Text>
                <Text style={{...FONTS.h2, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkGiroEndAVG}</Text>
                <Text style={{...FONTS.h4, color: COLORS.darkgray }}>CASA RATIO</Text>
                <Text style={{...FONTS.h2, color: COLORS.primary, alignSelf:'flex-end' }}>{user.dpkCasaRatioAVG}</Text>
                </View>
            </TouchableOpacity>   
            {/* baris 1  */}
            <View style={{flex:1, flexDirection: 'row'}}>
                {/* INT EXP */}
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text style={{...FONTS.h4, color: COLORS.darkgray }}>INT EXP</Text>
                        <Text style={{...FONTS.h2, color: COLORS.primary }}>{user.intexp}</Text>
                    </View>
                </TouchableOpacity>
                {/* INT EXP */}
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text style={{...FONTS.h4, color: COLORS.darkgray }}>ROA</Text>
                        <Text style={{...FONTS.h2, color: COLORS.primary,  }}>{user.roa}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* baris 2  */}
            <View style={{flex:1, flexDirection: 'row'}}>
                {/* INT EXP */}
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text style={{...FONTS.h4, color: COLORS.darkgray }}> Σ NASABAH</Text>
                        <Text style={{...FONTS.h2, color: COLORS.primary }}>{user.jumlahNasabah}</Text>
                    </View>
                </TouchableOpacity>
                {/* INT EXP */}
                <TouchableOpacity style={styles.card}>
                    <View>
                        <Text style={{...FONTS.h4, color: COLORS.darkgray }}>PHR</Text>
                        <Text style={{...FONTS.h2, color: COLORS.primary }}>{user.phr}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            
          
        </View>
        )
    }
}

export default CardList

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