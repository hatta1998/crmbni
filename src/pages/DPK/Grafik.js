import React, { Component } from 'react'
import { Text, View,Dimensions } from 'react-native'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import { COLORS, SIZES } from '../../../constants';


export default class Grafik extends Component {
    render() {
    const width = Dimensions.get('window').width-50
    const height = 250
        return (
                <View>

<BarChart
    data={{
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
        {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            
        ]
        }
    ]
    }}
    width={width}
    height={height}
    yAxisLabel={"Rp "}
    chartConfig={{
    propsForBackgroundLines: {
        strokeWidth: 1,
        stroke: "#e3e3e3",
        strokeDasharray: "0",
      },

      backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        barPercentage: 0.7,
        fillShadowGradient: `rgba(1, 122, 205, 1)`,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        barPercentage:0.5,
      
    barPercentage:1,
    style: {
        borderRadius: 16
    }
    }}
    style={{
    borderRadius: 16,
    
    }}
/>

<BarChart
    data={{
       
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
        {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            
        ]
        }
    ]   
 }}
    width={width}
    height={height}
    yAxisLabel={"Rp "}
    chartConfig={{
    //untuk garis horizontal
        propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: "#e3e3e3",
            strokeDasharray: "0",
          },
    //untuk stlying grafik      
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        barPercentage: 0.7,
        fillShadowGradient: COLORS.primary,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        barPercentage:0.8, //ketebalan bar
    style: {
        borderRadius: 16
        }
    }}
    style={{
    marginVertical: 8,
    borderRadius: 16
    }}
/>

<BarChart
    data={{
       
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
        datasets: [
        {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            
        ]
        }
    ]   
 }}
    width={width}
    height={height}
    yAxisLabel={"Rp "}
    chartConfig={{
    //untuk garis horizontal
        propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: "#e3e3e3",
            strokeDasharray: "0",
          },
    //untuk stlying grafik      
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        barPercentage: 0.7,
        fillShadowGradient: COLORS.secondary,
        fillShadowGradientOpacity: 1,
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(1, 122, 205, 1)`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
        barPercentage:0.8, //ketebalan bar
    style: {
        borderRadius: 16
        }
    }}
    style={{
    marginVertical: 8,
    borderRadius: 16,
    
    }}
/>

</View>




        )
    }
}

