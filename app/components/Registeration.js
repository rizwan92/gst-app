// app/index.js
import React, { Component } from 'react';
import {StyleSheet,Text, View,ScrollView,TextInput,Button} from 'react-native';
class Registeration extends Component {
  constructor(){
    super();
      this.state={
            name:'',
            email:'',
            number:'',
            password:'',
            cpassword:'',
      }
  }
  static navigationOptions = {
   title: 'Registeration',
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
           placeholder="Name"
           onChangeText={(name) => this.setState({name})}
           value={this.state.name}
           underlineColorAndroid="transparent"
         />
         <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            underlineColorAndroid="transparent"
          />
          <TextInput
             style={styles.input}
             placeholder="Number"
             onChangeText={(number) => this.setState({number})}
             value={this.state.number}
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
            <TextInput
               style={styles.input}
                 placeholder="Confirm Password"
               onChangeText={(cpassword) => this.setState({cpassword})}
               value={this.state.cpassword}
               secureTextEntry
               underlineColorAndroid="transparent"
             />
             <Button
                style={styles.button}
                onPress={()=>{}}
                title="Register"
                color="#286090"
                accessibilityLabel="Learn more about this purple button"
              />
                <Text style={{margin:20, color:'blue',fontSize:16}} onPress={() =>navigate('Login')}>Existing User? Login</Text>
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
  backgroundColor:'white',
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
      padding:10,
  },
});
export default Registeration;
