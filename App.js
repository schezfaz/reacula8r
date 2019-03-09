import React, { Component } from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import styles from "./styles"

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    let rows=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],[".",0,"="]]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity style={styles.butt}>
          <Text style={styles.buttText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let operators=[]
    let ops = ['+','-','*','/']
    for (let x = 0; x<4;x++){
      operators.push(<TouchableOpacity style={styles.butt}>
        <Text style={styles.buttText}>{ops[x]}</Text>
      </TouchableOpacity>)
    }

    return( 
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>7*8*6</Text>
        </View>  
        <View style={styles.result}>
          <Text style={styles.resultText}>786</Text>
        </View>
        <View style={styles.utilities}>
          <TouchableOpacity>
            <Text>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View> 
          <View style={styles.operators}>
            {operators}
          </View>
        </View>
      </View>
    );
  }

}