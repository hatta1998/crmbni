import React ,{ Component } from 'react'
import { View, Text,Button,StyleSheet,TouchableOpacity,Image } from 'react-native'
import {COLORS, FONTS, SIZES, icons} from "../../../constants"
import Tanggal from './Tanggal'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import FIREBASE from "../../config/firebase";


export default class KPI extends Component {
  constructor(){
    super()
    this.state={
      user: {},
      
      //untuk TABEL
      tableHead: ['', 'Realisasi', 'Target', 'Arcieve','Score','Weight','Result'],
      tableTitle: ['Posisi DPK', 'Enspansi Rata-Rata DPK', 'Enspansi Rata-Rata Giro', 'PHR','Kerjasama BB &CR'],
      tableData: [
        ['1.108', '690', '161%', '5.00','15','75'],
        ['0', '1', '1%', '0.00','35','-'],
        ['521', '620', '11%', '2.00','85','-'],
        ['4.02', '6.0', '6%', '3.00','25','25'],
        ['100', '100', '21%', '5.00','45','105'],

      ]
    }
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('User/kpi')
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let userItem = {...data};

        this.setState({
          user: userItem,
        });
      });
  }



  render() {
    const state = this.state;
    const {user} = this.state;

    return (
      <View style={{paddingHorizontal:SIZES.padding}}>
  <Tanggal/>
    

{/* untuk TABEL*/}
<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} flexArr={[1,1,1,1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle}  style={styles.title} heightArr={[70,70]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1,1,1,1, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>


      </View>
    );
  }
}

const styles = StyleSheet.create({
        head: {  height: 50,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 70  },
  text: { textAlign: 'center',fontSize:11,padding:1 }
   
  })