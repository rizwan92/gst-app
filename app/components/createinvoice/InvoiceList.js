import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView,TouchableHighlight,Platform} from 'react-native';
import {RNPrint} from 'NativeModules';
export default class InvoiceList  extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <View style={styles.container}>
      <Text >InvoiceList</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
});
