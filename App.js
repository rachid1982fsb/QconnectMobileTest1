import React, {Component} from 'react';
import FirstRunNavigator from './src/screens/FirstRun/FirstRunNavigator'
import {View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <FirstRunNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
