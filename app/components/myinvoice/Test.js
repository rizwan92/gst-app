import React, { Component } from 'react';
import {StyleSheet,
Text,
View,
Linking,
Vibration,
Dimensions
} from 'react-native';
import Camera from 'react-native-camera';

class Test extends Component {
constructor(){
  super();
    this.state={
              text:'',
          scanning:true,
    }
}
  getInitialState() {
          return {
              cameraType: Camera.constants.Type.back
          }
  }
  _handleBarCodeRead(e) {
    Vibration.vibrate();
    this.setState({scanning: false,
    text:e.data});

    return;
}
  static navigationOptions = {
   title: 'Test',
 };


  render() {
    if(this.state.scanning) {
 return (
 <View style={styles.container}>
     <Text style={styles.welcome}>
     Barcode Scanner
     </Text>
     <View style={styles.rectangleContainer}>
     <Camera style={styles.camera} type={this.state.cameraType} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
         <View style={styles.rectangleContainer}>
         <View style={styles.rectangle}/>
         </View>
     </Camera>
     </View>
     <Text style={styles.instructions}>
     Double tap R on your keyboard to reload,{'\n'}
     </Text>
 </View>
 );
 }
 else{
 return (<View  style={styles.container}>
     <Text style={styles.welcome}>
     Barcode Scanner
     </Text>
     <Text style={styles.instructions}>
     Double tap R on your keyboard to reload,{'\n'}
     {this.state.text}
     </Text>
 </View>);
 }
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
camera: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
},

rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
},
});

export default Test;
