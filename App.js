import React, { Component } from "react"
import {StyleSheet, Text, View} from "react-native"
import styles from "./styles"

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.result}></View>
        <View style={styles.calculation}></View>
        <View style={styles.buttons}>
          <View style={styles.numbers}></View>
          <View style={styles.operators}></View>
        </View>
      </View>
    );
  }

}