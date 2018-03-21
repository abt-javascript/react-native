import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Page from './src/home/index';

const Navigator = StackNavigator({
  Home: {
    screen: Page,
  }
});

export default () => (
  <Root>
    <Navigator />
  </Root>
)
