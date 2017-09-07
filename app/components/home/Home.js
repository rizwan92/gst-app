import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView,TextInput,Button,TouchableHighlight,Image} from 'react-native';
class Home extends Component {
  constructor(){
    super();
      this.state={
            email:'',
            password:'',
      }
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
   title: 'Home',
   headerRight:  <TouchableHighlight style={{padding:10}} onPress={() =>navigation.navigate('Login')}>
                       <Image source={require('../../images/ic_account_circle_black_24dp.png')}/>
                  </TouchableHighlight >,
 });

  render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={[styles.subContainer, styles.one]}></View>
      <View style={[styles.subContainer, styles.two]}>
      <Text style={{margin:20, color:'blue',fontSize:25}} onPress={() =>navigate('MyInvoice')}>My Invoices</Text>
      </View>
      <View style={[styles.subContainer, styles.three]}>
      <Text style={{margin:20, color:'blue',fontSize:25}} onPress={() =>navigate('CreateInvoice')}>Create Invoices</Text>
      </View>
      <View style={[styles.subContainer, styles.four]}>
      <Text style={{margin:20, color:'blue',fontSize:25}} onPress={() =>navigate('Test')}>Test</Text>
      </View>
      <View style={[styles.subContainer, styles.five]}>
      <Text style={{margin:20, color:'blue',fontSize:25}} onPress={() =>navigate('QRCode')}>Test</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
  flex:1,
  backgroundColor:'white',
  flexDirection:'column',
  },
  subContainer: {
      flex:1,
  },
  one:{
      flex:1,
      borderWidth:1,
  },
  two:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
  },
  three:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
      borderWidth:1,
  },
  four:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
      borderWidth:1,
  },
  five:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
      borderWidth:1,
  },
});
export default Home;
