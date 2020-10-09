import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from './source/components/SplashScreen';
import Intro from './source/components/Intro';
import Login from './source/components/Login';
import ResetPassword from './source/components/ResetPassword';
import Register from './source/components/Register';
import Home from './source/components/Home';
import Drawer from './source/components/Drawer';
import Navigator from './source/components/Navigator';

export class App extends Component {
  render() {
    return <Navigator />;
  }
}

export default App;
