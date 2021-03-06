import React, { Component } from "react"
import {Text, TouchableOpacity, View} from "react-native"
import styles from "./styles"

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      calculationText: "",
      resultText: ""
    }
  }

  calculateResult(){
    const text = this.state.calculationText
    this.setState({
      resultText: eval(text)
    })
  }

  validate(){
    const text = this.state.calculationText
    if(text.slice(-1)=="+"||text.slice(-1)=="-"||text.slice(-1)=="*"||text.slice(-1)=="/"){
      return false //also make a toast maybe 
    }

    return true
  }

  buttonPressed(data){
    if(data == '='){
      return this.validate() && this.calculateResult()
    }

    this.setState({
      calculationText: this.state.calculationText + data
    })
  }

  operate(operation){
    const lastCharacter = this.state.calculationText.split('').pop()
    if(lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/') return
    switch(operation){
      case '+':

      case '-':
        this.setState({
          calculationText: this.state.calculationText + operation
        })
        break;
      case '*':

      case '/':
        if(this.state.calculationText == "") return
        this.setState({
          calculationText: this.state.calculationText + operation
        })
        
    }
  }

  deleteData(){
    let text = this.state.calculationText.substring(0, this.state.calculationText.length-1)
    this.setState({
      calculationText: text
    })
  }

  clearData(){
    this.setState({
      calculationText: "",
      resultText: ""
    })
  }

  render(){
    let rows=[]
    let nums=[[9,8,7],[6,5,4],[3,2,1],[".",0,"="]]
    for(let i=0;i<4;i++){
      let row=[]
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={()=>this.buttonPressed(nums[i][j])} style={styles.butt}>
          <Text style={styles.buttText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let operators=[]
    let ops = ['+','-','*','/']
    for (let x = 0; x<4;x++){
      operators.push(<TouchableOpacity key={ops[x]} onPress={()=>this.operate(ops[x])} style={styles.butt}>
        <Text style={styles.buttText}>{ops[x]}</Text>
      </TouchableOpacity>)
    }

    return( 
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>  
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.utilities}>
          <TouchableOpacity key={"clear"} onPress = {()=>this.clearData()}>
            <Text style={styles.utilityText}>CLEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity key = {"delete"}onPress={()=>this.deleteData()}>
            <Text style={styles.utilityText}>DELETE</Text>
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