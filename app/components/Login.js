
// app/index.js
import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView,TextInput,Button} from 'react-native';
class Login extends Component {
  constructor(){
    super();
      this.state={
            email:'',
            password:'',
      }
  }
  static navigationOptions = {
   title: 'Login',
 };

  render() {
     const { navigate } = this.props.navigation;
    return (
      <ScrollView  style={styles.scrollContainer}>
      <View style={styles.scrollView}>
      <View style={styles.container}>
       <View style={[styles.subContainer, styles.one]}></View>
     <View  style={[styles.subContainer, styles.two]}>
     <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        underlineColorAndroid="transparent"
      />
      <TextInput
         style={styles.input}
           placeholder="Password"
         onChangeText={(password) => this.setState({password})}
         value={this.state.password}
         secureTextEntry
         underlineColorAndroid="transparent"
       />
       <Button
          style={styles.button}
          onPress={() =>navigate('MyHome')}
          title="Login"
          color="#286090"
          accessibilityLabel="Learn more about this purple button"
        />
          <Text style={{margin:20, color:'blue',fontSize:16}} onPress={() =>navigate('Registeration')}>New to App? Register</Text>
       </View>
       <View style={[styles.subContainer, styles.three]}></View>
   </View>

      </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex:1,
    backgroundColor:'white',
  },
  scrollView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white'
  },
  subContainer: {
      flex:1,
  },
  one:{
    flex:1,
  },
  two:{
    flex:3,
    paddingTop:20,
  },
  three:{
    flex:1,
  },
  input:{
    borderRadius:5,
    margin:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button:{
      margin:10,
  },
});
export default Login;
