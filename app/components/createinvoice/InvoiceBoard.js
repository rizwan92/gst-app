import React, { Component } from 'react';
import {StyleSheet,Text, View, ScrollView,TextInput,Button,Image,TouchableHighlight,Modal,ToastAndroid} from 'react-native';
import ActionButton from 'react-native-action-button';
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class InvoiceBoard  extends Component {
  constructor(){
    super();
      this.state={
          tableData :[],
          total:0,
          modalVisible: false,
            name:'',
            number:'',
            prname:'',
            prrate:'',
            prquantity:'',
            prdiscount:'',
      }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  submitProduct(){
    let Description=this.state.prname;
    let Rate=this.state.prrate;
    let Quantity=this.state.prquantity;
    let Discount=this.state.prdiscount;
    let Amount=Rate*Quantity;
    if (Discount) {
      let discount1= Amount * Discount/100;
      Amount=Amount-discount1;
    }


    const product=[
      Description,
      Rate,
      Quantity,
      Discount,
      Amount,
    ];
    var arrayvar = this.state.tableData.slice()
    arrayvar.push(product);
      this.setState({tableData:arrayvar,
        prname:'',
        prrate:'',
        prquantity:'',
        prdiscount:'',
        pramount:'',
        modalVisible:false,
        total:this.state.total + Amount,
        });
  }
  render(){
        const tableData=this.state.tableData;
        const tableHead = ['Description', 'Rate', 'Quantity','Discount', 'Amount'];
        const { navigate } = this.props.navigation;
    return(
      <View style={styles.maincontainer}>
      <Modal
          presentationStyle="overFullScreen"
          animationType={"slide"}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
            <ScrollView >
         <View style={{marginTop: 22}}>
          <View>
            <Text style={{fontSize:30}}>Add Product</Text>

            <TouchableHighlight
            style={{position:'absolute',top:3,right:5,}}
            onPress={() =>{this.setModalVisible(false)}}>
              <Image source={require('../../images/ic_cancel_black_24dp.png')}/>
            </TouchableHighlight>
            <View style={{padding:20}}>
            <TextInput
               style={styles.modalinput}
               placeholder="Name of Product"
               onChangeText={(prname) => this.setState({prname})}
               value={this.state.prname}
               returnKeyType="next"
               underlineColorAndroid="transparent"
             />
             <TextInput
                style={styles.modalinput}
                placeholder="Price"
                keyboardType = 'numeric'
                onChangeText={(prrate) => this.setState({prrate})}
                value={this.state.prrate}
                returnKeyType="next"
                underlineColorAndroid="transparent"
              />
              <TextInput
                 style={styles.modalinput}
                 placeholder="Quantity"
                 keyboardType = 'numeric'
                 onChangeText={(prquantity) => this.setState({prquantity})}
                 value={this.state.prquantity}
                 returnKeyType="next"
                 underlineColorAndroid="transparent"
               />
               <TextInput
                  style={styles.modalinput}
                  placeholder="Dicount"
                  keyboardType = 'numeric'
                  onChangeText={(prdiscount) => this.setState({prdiscount})}
                  value={this.state.prdiscount}
                  returnKeyType="done"
                  underlineColorAndroid="transparent"
                />
                <View style={styles.button}>

                <Button
                   onPress={this.submitProduct.bind(this)}
                   title="Submit"
                   color="#286090"
                 />
                 </View>
                 <View style={styles.button}>
                 <Button
                    onPress={() =>{}}
                    title="Cancel"
                    color="#31b0d5"
                  />
                  </View>
                </View>

          </View>
         </View>
           </ScrollView>
        </Modal>
      <ScrollView>
            <View style={styles.container}>
               <View style={[styles.subContainer, styles.one]}>
                 </View>
               <View  style={[styles.subContainer, styles.two]}><Text style={{ textAlign:'center',fontWeight:'bold',flexDirection:'column'}}><Text>Total: </Text><Text style={{color:'blue',fontSize:16}}> Rs {this.state.total} </Text></Text>
                </View>
             </View>
             <View style={{padding:5,}}>
                 <Table>
                    <Row data={tableHead} style={styles.head} flexArr={[2, 1, 1, 1, 1]} textStyle={styles.textheader}/>
                    <Rows data={tableData} style={styles.row} flexArr={[2, 1, 1, 1, 1]} textStyle={styles.text}/>
                  </Table>
             </View >
             <View>
             <View style={styles.button}>
           <Button
               style={styles.button}
               onPress={() =>{}}
               title="Done"
               color="#286090"
             />
             </View>
               <View style={styles.button}>
             <Button
                 style={styles.button}
                 onPress={() =>{}}
                 title="cancel"
                 color="#f65900"
               />
               </View>
             </View>
        </ScrollView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          >
          <ActionButton.Item buttonColor='white' title="Scan" onPress={() => {}}>
           <Image source={require('../../images/qr-code.png')}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='white' title="New Task"  onPress={() => {this.setModalVisible(true)}}>
           <Image source={require('../../images/ic_add_black_24dp.png')}/>
          </ActionButton.Item>
          </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    backgroundColor:'white',
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
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  two:{
    flex:1,
    paddingTop:5,
  },
  three:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  input:{
    margin:4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width:'100%',
    borderRadius:5,
  },
  modalinput:{
    margin:10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button:{
      margin:10,
      borderRadius:10,
  },
    head: { height: 40, backgroundColor: 'white' },
    textheader:{
      marginLeft:3,
      fontWeight:'bold',
      fontSize:13,
    },
   text: { marginLeft: 5 },
   row: { height: 30 }
});
