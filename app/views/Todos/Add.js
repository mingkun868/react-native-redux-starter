'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import {
  connectComponent
} from '../../utils';

class AddList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>请输入内容:</Text>
        <TextInput
          style={{height: 33, borderRadius: 3, borderColor: 'gray', borderWidth: 1, margin:10, paddingLeft:3, paddingRight:3}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          returnKeyType='done'
        />
        <TouchableOpacity
          style={{width:100, height:33, backgroundColor:'#AAAAAA', justifyContent:'center', alignItems:'center'}}
          onPress={e => this._pressAddText()}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _pressAddText() {
    if (this.state.text == '') {
      return;
    }
    const { actions } = this.props;
    actions.addTodo(this.state.text);
  }
}

//redux
export default connectComponent(AddList);