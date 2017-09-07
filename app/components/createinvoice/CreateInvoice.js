
import React, { Component } from 'react';
import {TabNavigator,} from 'react-navigation';
import { View, StyleSheet ,Text,TouchableHighlight,Image} from 'react-native';
import  InvoiceList  from './InvoiceList';
import  InvoiceBoard  from './InvoiceBoard';

const MyApp = TabNavigator({
  Board: {
    screen: InvoiceBoard,
  },
  Invoices: {
    screen: InvoiceList,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
  },
});

class CreateInvoice extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
     title: 'Create Invoice',
 });


  render() {
     const { navigate } = this.props.navigation;
    return (
    <MyApp />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
});

export default CreateInvoice;
