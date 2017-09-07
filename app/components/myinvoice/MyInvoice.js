import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView,TextInput,Button} from 'react-native';
class MyInvoice extends Component {
  constructor(){
    super();
  }
  static navigationOptions = {
   title: 'My Invoice',
 };

  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  },
});
export default MyInvoice;
