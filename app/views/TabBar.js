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
          renderIcon={()=><Image
                style={{height:23,width:23,resizeMode:'cover'}}
                source={require('../images/info-icon.png')} />}
          renderSelectedIcon={()=><Image
                style={{height:23,width:23,resizeMode:'cover'}}
                source={require('../images/info-icon-active.png')} />}
          onPress={() => this.setState({ selectedTab: 'list' })}>
          <List />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'add'}
          title='Add'
          renderIcon={()=><Image
                style={{height:23,width:23,resizeMode:'cover'}}
                source={require('../images/notifications-icon.png')} />}
          renderSelectedIcon={()=><Image
                style={{height:23,width:23,resizeMode:'cover'}}
                source={require('../images/notifications-icon-active.png')} />}
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
