'use strict';

import React, { Component } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';

import {
  connectComponent
} from '../../utils';

class TodoList extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.list)
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.list)
      })
    }
  }

  render() {
    return (
      <ListView
        style={{flex:1, marginTop:20}}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        enableEmptySections={true}
      />
    );
  }

  _renderRow(rowData, sectionID, rowID) {
    console.log('ListView renderRow:' + sectionID + '_' + rowID);
    return (
      <View style={{justifyContent:'center', backgroundColor:'#EFEFEF', margin:3, padding:5, borderRadius:2}}>
        <Text style={{marginLeft:10}}>section:{sectionID}, row:{rowID}, text:{rowData}</Text>
      </View>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={`${sectionID}-${rowID}`} style={{height:1, backgroundColor:'#E4E4E4'}} />
    );
  }
}

//redux
function mapStateToProps(state) {
  const { todoList } = state;
  return {
    list: todoList.list
  };
}
export default connectComponent(TodoList, {
  mapStateToProps
});