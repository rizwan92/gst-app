import React, { Component } from 'react';
import {StyleSheet,
Text,
View,
} from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

class QRCode extends Component {
constructor(){
  super();
    this.state={
          ledgeres:[{name:"jfbv"},{name:"kjsdbvk"}],
    }
}
componentWillReceiveProps(nextProps){
  this.setState({ ledgeres: nextProps.ledgered })
}
  static navigationOptions = {
   title: 'QRCode',
 };


  render() {
      const { ledgeres, loading,status } = this.props;
      console.log(ledgeres);
      return(
        <View style={styles.container}>

        </View>
      );
 }
}
export default createContainer(params=>{
  const todosHandle = Meteor.subscribe('ledgerMaster');
      const loading = !todosHandle.ready();
  return {
     status: Meteor.status(),
    loading,
    ledgeres:  Meteor.collection('ledgerMaster').find()
  };
}, QRCode)
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
});
