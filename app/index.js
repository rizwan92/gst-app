import React, { Component } from 'react';
import {StackNavigator,} from 'react-navigation';
import  Login  from './components/Login';
import  Registeration  from './components/Registeration';
import  Home  from './components/home/Home';
import  CreateInvoice  from './components/createinvoice/CreateInvoice';
import  MyInvoice  from './components/myinvoice/MyInvoice.js';
import  Test  from './components/myinvoice/Test.js';
import  QRCode  from './components/myinvoice/QRCode.js';
import Meteor from 'react-native-meteor';
import settings from './settings';
Meteor.connect(settings.METEOR_URL);
const App = StackNavigator({
  CreateInvoice: { screen: CreateInvoice },
  Home: { screen: Home },
  Login: { screen: Login },
  Registeration: { screen: Registeration },
  Login: { screen: Login },
  MyInvoice: { screen: MyInvoice },
  Test: { screen: Test },
  QRCode: { screen: QRCode },
});

export default App;
