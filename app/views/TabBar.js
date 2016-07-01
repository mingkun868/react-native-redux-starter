import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import List from './Todos/List';
import Add from './Todos/Add';

export default class TabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'list'
    };
  }

  render(){
    return (
      <TabNavigator tabBarStyle ={styles.tabStyle}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'list'}
          title='List'
          onPress={() => this.setState({ selectedTab: 'list' })}>
          <List />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'add'}
          title='Add'
          onPress={() => this.setState({ selectedTab: 'add' })}>
          <Add />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

}

var styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#FEFEFE'
  }
});
