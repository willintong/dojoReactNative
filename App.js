import React, { Component, Styles } from "react";
import {createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base';

import MainScreen from './components/MainScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <AppStackNavigator />
    );  
  }
}

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  },
})