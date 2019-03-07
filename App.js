import React, { Component } from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import styles from "./styles"

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return( 
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>7*8*6</Text>
        </View>  
        <View style={styles.result}>
          <Text style={styles.resultText}>786</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butt}>
                <Text>0</Text>
              </TouchableOpacity>
            </View>
          </View> 
          <View style={styles.operators}>
            <TouchableOpacity style={styles.butt}>
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butt}>
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butt}>
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butt}>
              <Text>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}